import { Component, AfterViewInit , OnInit} from '@angular/core';
import * as L from 'leaflet';
import { Repository } from '../models/repository';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map:any;

  constructor(private repo: Repository) { }

  private initMap(width:number , lon:number): void {
    this.map = L.map('map', {
      center: [ width, lon ],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 6 ,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }


  // ngAfterViewInit(): void {

    
  //     this.initMap(this.repo.tender.width || 0 ,this.repo.tender.longitude || 0 );
      
    
  // }

  ngOnInit(): void {

    
      setTimeout(() => {
        this.initMap(this.repo.tender.width || 0 ,this.repo.tender.longitude || 0 );
        
      },250);
      
    
  }
}









using System;
using System.Reactive.Linq;
using System.Reactive.Subjects;
using System.Threading.Tasks;
using Observable_ex;

// Актор модель.

public class BetProcess
{
    private readonly Subject<double> messageSubject = new Subject<double>(); // жазылушыларға деректерді (коэффициенттер) жіберу үшін қолданылады


    public void Send(double koef)//: Коэффицентті абоненттерге messageSubject арқылы жіберу әдісі.
    {
        messageSubject.OnNext(koef);

    }

    public void EndProcess()//Процесті тоқтату және жазылушыларға тоқтату оқиғасын жіберу әдісі.
    {
        messageSubject.OnCompleted();
    }

    public void ErrorProcess() // Қатені құру және оны messageSubject арқылы жазылушыларға жіберу әдісі.
    {
        messageSubject.OnError(new Exception("Извините процесс был неожиданно прерван"));
    }

    public IObservable<double> Receive() //Коэффицент мәндеріне жазылу үшін пайдалануға болатын IObservable<double> қайтаратын әдіс.
    {
        return messageSubject.AsObservable();
    }
}



class Trader
{
    public int IdTrader { get; set; }
    public string NameTrader { get; set; }
    public double koef { get; set; }
    public double BankAccount { get; set; }
    public bool Accept { get; set; }

    public Trader(int Id, string NameTrader, double koef, double BankAccount, bool Accept = false)
    {
        this.IdTrader = Id;
        this.NameTrader = NameTrader;
        this.koef = koef;
        this.BankAccount = BankAccount;
        this.Accept = Accept;
    }
}

class Program
{
    static List<Trader> traders = new List<Trader> { new Trader(1, "Ерасыл", 1.1, 500), new Trader(2, "Ернур", 1.1, 5000), new Trader(3, "Петр", 1.1, 1000), };

    public static void TradingFunction(int id, double koef)
    {
      /*Бұл белгілі бір саудагерге (идентификатор бойынша) берілген коэффициентті пайдаланып сауда жасауды имитациялайтын функция. Ол трейдердің балансы мен шешімін ескереді және ақпаратты консольде көрсетеді.*/

        int n;
        Console.WriteLine($"{traders[id].NameTrader} - счет : {traders[id].BankAccount}");
        Console.WriteLine($"<<{koef}>>");
        traders[id].BankAccount += traders[id].BankAccount*koef;
        Console.WriteLine($"{traders[id].NameTrader} - ваш баланс {traders[id].BankAccount}");
        Console.WriteLine("\nЗавершить процесс 1/2");
        n = int.Parse(Console.ReadLine());
        if (n == 1)
        {
            traders[id].Accept = true;
        }

        if (traders[id].Accept == true)
        {
            Console.WriteLine($"{traders[id].NameTrader} - ваш конечный баланс {traders[id].BankAccount}");
            return;
        }

        
    }

    static async Task Main(string[] args)
    {
        var bet = new BetProcess(); //Объект

        //Жазушыларды жасау
        var bettor1 = bet.Receive()
           .Subscribe(message => TradingFunction(0, message));
        var bettor2 = bet.Receive()
          .Subscribe(message => TradingFunction(1, message));
        var bettor3 = bet.Receive()
          .Subscribe(message => TradingFunction(2, message));

        Random random = new Random();

        int n = 0;

        while(true) // Трейдинг процес имимтациясы
        {

            random = new Random();

            double randomDouble = (random.NextDouble() * 2.0) - 1.0;

            bet.Send(randomDouble);
            if (traders[0].Accept == true)
            {
                bettor1.Dispose();
            }
            if (traders[1].Accept == true)
            {
                bettor2.Dispose();
            }
            if (traders[2].Accept == true)
            {
                bettor3.Dispose();
            }
            Console.WriteLine("\n\n");

            n++;

            if(n==10)
            {
                bet.EndProcess();
            }

        }

        foreach (var a in traders)
        {
            Console.WriteLine($"{a.NameTrader} - {a.BankAccount}тг\n");
        }
        Console.ReadKey();
    }
}


