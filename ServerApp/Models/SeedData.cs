using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using ServerApp.Models;
namespace ServerApp {
    public class SeedData {
        public static void SeedDatabase(DataContext context) {
            context.Database.Migrate();
                context.Tenders.AddRange(
                    new Tender{
                        TenderNumber = 058069609 , 
                        TenderDate = new DateTime(2023 , 8 , 15) , 
                        TenderAccessDate = new DateTime(2023 , 9 , 6) , 
                        TenderName = "арматура д12 А3 - 1тонна" , 
                        TenderPictUrl = "https://img01.flagma.kz/photo/armatura-a500c-rossiya-i-kazahstan-2921016_medium.jpg" , 
                        TenderDesk = "Арматура в Алматы, как и по всей территории РК – это продукция в виде стальных стержней различных форм, сечений, типоразмеров. Прутки из низколегированной или углеродистой стали нашли широкое применение в сфере армирования железобетонных конструкций." ,
                        Width=49.8333300 , 
                        Longitude=73.1658000 ,
                        TenderStartDate = new DateTime(2023 , 9 , 7) , 
                        TenderEndDate = new DateTime(2023 , 9 , 25) , 
                        Location = "Караганды" , 
                        Elect = false , 
                        PageFlag = false , 
                        Category = "Мелкий ремонт"
                    } ,
                    new Tender{
                        TenderNumber = 0453453 , 
                        TenderDate = new DateTime(2023 , 9 , 1) , 
                        TenderAccessDate = new DateTime(2023 , 9 , 6) , 
                        TenderName = "цемент - 10тонн М400" , 
                        TenderPictUrl = "https://st17.stpulscen.ru/images/product/369/621/034_medium2.jpg" , 
                        TenderDesk = "Доставка строительных материалов не включена в стоимость товаров, и осуществляется по Уфе и Республики по тарифам, рассчитанным для каждого клиента и по каждому заказу индивидуально." ,
                        Width=43.2567 , 
                        Longitude=76.9286 ,
                        TenderStartDate = new DateTime(2023 , 9 , 1) , 
                        TenderEndDate = new DateTime(2023 , 9 , 25) , 
                        Location = "Алматы" , 
                        Elect = false , 
                        PageFlag = false , 
                        Category = "Мелкий ремонт"
                    } ,
                    new Tender{
                        TenderNumber = 03782372 , 
                        TenderDate = new DateTime(2023 , 8 , 15) , 
                        TenderAccessDate = new DateTime(2023 , 9 , 6) , 
                        TenderName = "Шурупы на кровлю и шайба м3" , 
                        TenderPictUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvniFIHZPmG0d5TZN6Hmv1GcyXn-ynarVIZQ&usqp=CAU" , 
                        TenderDesk = "Кровельные саморезы по металлу со сверлом применяются для сквозного крепления и уплотнения соединения кровельного железа и различных металлических профилей к металлическим каркасам стен и крыш, к листам толщиной до 1,2 мм без предварительного сверления и толщиной до 6 мм с предварительным сверлением, Головка у саморезов под шестигранную биту, Кровельные саморезы производят из углеродистой стали и покрываются цинковым покрытием, Покрытие из антикоррозионного состава обеспечивает длительный срок службы саморезов." ,
                        Width=43 , 
                        Longitude=76 ,
                        TenderStartDate = new DateTime(2023 , 9 , 1) , 
                        TenderEndDate = new DateTime(2023 , 9 , 25) , 
                        Location = "Алматинская область" , 
                        Elect = false , 
                        PageFlag = false, 
                        Category = "Отделочные работы"
                    } ,
                    new Tender{
                        TenderNumber = 04337843 , 
                        TenderDate = new DateTime(2023 , 8 , 15) , 
                        TenderAccessDate = new DateTime(2023 , 9 , 6) , 
                        TenderName = "Инертные материалы бетон" , 
                        TenderPictUrl = "https://img01.flagma.kz/photo/armatura-a500c-rossiya-i-kazahstan-2921016_medium.jpg" , 
                        TenderDesk = "Инертные материалы это, прежде всего, песок, гранитный щебень и керамзит, то есть нерудные ископаемые, которые используются при строительстве дорог и планировке территорий. " ,
                        Width=49.97493 , 
                        Longitude=82.60172 ,
                        TenderStartDate = new DateTime(2023 , 9 , 1) , 
                        TenderEndDate = new DateTime(2023 , 9 , 25) , 
                        Location = "Восточно-Казахстанская область" , 
                        Elect = false , 
                        PageFlag = false, 
                        Category = "Полы"
                    } ,
                    new Tender{
                        TenderNumber = 03894832 , 
                        TenderDate = new DateTime(2023 , 8 , 15) , 
                        TenderAccessDate = new DateTime(2023 , 9 , 6) , 
                        TenderName = "огнезащита степень огнезащиты К90 мин на 6400 м2" , 
                        TenderPictUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW3F6fuO_XO9OLLj3fE1Zcz7NW1crR5Yemwg&usqp=CAU" , 
                        TenderDesk = "Классическая пропитка реагентного типа с кислотной реакцией. Атмосферная огнезащита и антисептирование деревянных конструкций. Надолго обеспечивает комплексную защиту древесины. Позволяет перевести древесину в трудносгораемый материал (I группа огнезащитной эффективности), и в трудновоспламеняемый материал (II группа огнезащитной эффективности)." ,
                        Width=51.1801 , 
                        Longitude=71.446 ,
                        TenderStartDate = new DateTime(2023 , 9 , 1) , 
                        TenderEndDate = new DateTime(2023 , 9 , 25) , 
                        Location = "Астана" , 
                        Elect = false , 
                        PageFlag = false, 
                        Category = "Отделочные работы"
                    } ,
                    new Tender{
                        TenderNumber = 0348343 , 
                        TenderDate = new DateTime(2023 , 8 , 15) , 
                        TenderAccessDate = new DateTime(2023 , 9 , 6) , 
                        TenderName = "Поребрики пазмер 1000х200х80 количество 10000 шт" , 
                        TenderPictUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJmNQVFbI6TZUo4q5lE9vLqpDpDsQ-rPGrAA&usqp=CAU" , 
                        TenderDesk = "Завод по производству Бордюр, Поребриков, Брусчатки, Плитки из Казахстанского гранита!!!" ,
                        Width=51.1801 , 
                        Longitude=71.446 ,
                        TenderStartDate = new DateTime(2023 , 9 , 1) , 
                        TenderEndDate = new DateTime(2023 , 9 , 25) , 
                        Location = "Астана" , 
                        Elect = false , 
                        PageFlag = false, 
                        Category = "Молярные и штукатурные работы"
                    } ,
                    new Tender{
                        TenderNumber = 058069609 , 
                        TenderDate = new DateTime(2023 , 8 , 15) , 
                        TenderAccessDate = new DateTime(2023 , 9 , 6) , 
                        TenderName = "арматура д12 А3 - 1тонна" , 
                        TenderPictUrl = "https://img01.flagma.kz/photo/armatura-a500c-rossiya-i-kazahstan-2921016_medium.jpg" , 
                        TenderDesk = "Арматура в Алматы, как и по всей территории РК – это продукция в виде стальных стержней различных форм, сечений, типоразмеров. Прутки из низколегированной или углеродистой стали нашли широкое применение в сфере армирования железобетонных конструкций." ,
                        Width=49.8333300 , 
                        Longitude=73.1658000 ,
                        TenderStartDate = new DateTime(2023 , 9 , 7) , 
                        TenderEndDate = new DateTime(2023 , 9 , 25) , 
                        Location = "Караганды" , 
                        Elect = false , 
                        PageFlag = false, 
                        Category = "Сантехника"
                    } ,
                    new Tender{
                        TenderNumber = 0453453 , 
                        TenderDate = new DateTime(2023 , 9 , 1) , 
                        TenderAccessDate = new DateTime(2023 , 9 , 6) , 
                        TenderName = "цемент - 10тонн М400" , 
                        TenderPictUrl = "https://st17.stpulscen.ru/images/product/369/621/034_medium2.jpg" , 
                        TenderDesk = "Доставка строительных материалов не включена в стоимость товаров, и осуществляется по Уфе и Республики по тарифам, рассчитанным для каждого клиента и по каждому заказу индивидуально." ,
                        Width=43.2567 , 
                        Longitude=76.9286 ,
                        TenderStartDate = new DateTime(2023 , 9 , 1) , 
                        TenderEndDate = new DateTime(2023 , 9 , 25) , 
                        Location = "Алматы" , 
                        Elect = false , 
                        PageFlag = false, 
                        Category = "Молярные и штукатурные работы"
                    } ,
                    new Tender{
                        TenderNumber = 03782372 , 
                        TenderDate = new DateTime(2023 , 8 , 15) , 
                        TenderAccessDate = new DateTime(2023 , 9 , 6) , 
                        TenderName = "Шурупы на кровлю и шайба м3" , 
                        TenderPictUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvniFIHZPmG0d5TZN6Hmv1GcyXn-ynarVIZQ&usqp=CAU" , 
                        TenderDesk = "Кровельные саморезы по металлу со сверлом применяются для сквозного крепления и уплотнения соединения кровельного железа и различных металлических профилей к металлическим каркасам стен и крыш, к листам толщиной до 1,2 мм без предварительного сверления и толщиной до 6 мм с предварительным сверлением, Головка у саморезов под шестигранную биту, Кровельные саморезы производят из углеродистой стали и покрываются цинковым покрытием, Покрытие из антикоррозионного состава обеспечивает длительный срок службы саморезов." ,
                        Width=43 , 
                        Longitude=76 ,
                        TenderStartDate = new DateTime(2023 , 9 , 1) , 
                        TenderEndDate = new DateTime(2023 , 9 , 25) , 
                        Location = "Алматинская область" , 
                        Elect = false , 
                        PageFlag = false, 
                        Category = "Сантехника"
                    } ,
                    new Tender{
                        TenderNumber = 04337843 , 
                        TenderDate = new DateTime(2023 , 8 , 15) , 
                        TenderAccessDate = new DateTime(2023 , 9 , 6) , 
                        TenderName = "Инертные материалы бетон" , 
                        TenderPictUrl = "https://img01.flagma.kz/photo/armatura-a500c-rossiya-i-kazahstan-2921016_medium.jpg" , 
                        TenderDesk = "Инертные материалы это, прежде всего, песок, гранитный щебень и керамзит, то есть нерудные ископаемые, которые используются при строительстве дорог и планировке территорий. " ,
                        Width=49.97493 , 
                        Longitude=82.60172 ,
                        TenderStartDate = new DateTime(2023 , 9 , 1) , 
                        TenderEndDate = new DateTime(2023 , 9 , 25) , 
                        Location = "Восточно-Казахстанская область" , 
                        Elect = false , 
                        PageFlag = false, 
                        Category = "Сантехника"
                    } ,
                    new Tender{
                        TenderNumber = 03894832 , 
                        TenderDate = new DateTime(2023 , 8 , 15) , 
                        TenderAccessDate = new DateTime(2023 , 9 , 6) , 
                        TenderName = "огнезащита степень огнезащиты К90 мин на 6400 м2" , 
                        TenderPictUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW3F6fuO_XO9OLLj3fE1Zcz7NW1crR5Yemwg&usqp=CAU" , 
                        TenderDesk = "Классическая пропитка реагентного типа с кислотной реакцией. Атмосферная огнезащита и антисептирование деревянных конструкций. Надолго обеспечивает комплексную защиту древесины. Позволяет перевести древесину в трудносгораемый материал (I группа огнезащитной эффективности), и в трудновоспламеняемый материал (II группа огнезащитной эффективности)." ,
                        Width=51.1801 , 
                        Longitude=71.446 ,
                        TenderStartDate = new DateTime(2023 , 9 , 1) , 
                        TenderEndDate = new DateTime(2023 , 9 , 25) , 
                        Location = "Астана" , 
                        Elect = false , 
                        PageFlag = false, 
                        Category = "Поклеика боев"
                    } 

                    

                );

            context.TendersCreate.AddRange(
                new TenderCreate{
                    TenderCreateNumber=4387778,
                    TenderCreateUnit="Штука" , 
                    NameTenderCreations="Шуруп",
                    TenderDeskCreations="Шуру́п — крепёжное изделие в форме стержня с наружной специальной резьбой, резьбовым коническим концом и головкой на другом конце, предназначенное для соединения с мягкими материалами путём образования резьбы в отверстии соединяемого изделия." , 
                    TenderCreationsCategory="материалы"

                } , 
                new TenderCreate{
                    TenderCreateNumber=7644567,
                    TenderCreateUnit="Единица" , 
                    NameTenderCreations="Станок",
                    TenderDeskCreations="Станок который подходит для обработки дерево и других материалов." , 
                    TenderCreationsCategory="оборудование"

                } , 
                new TenderCreate{
                    TenderCreateNumber=3487443,
                    TenderCreateUnit="Штука" , 
                    NameTenderCreations="Мотопила",
                    TenderDeskCreations="Мотопила позволяет срезать деревья." , 
                    TenderCreationsCategory="инструменты"

                } , 
                 new TenderCreate{
                    TenderCreateNumber=23233,
                    TenderCreateUnit="кг" , 
                    NameTenderCreations="Цемент",
                    TenderDeskCreations="Цемент высокого качества который позволит вам построить прекрасное сооружение." , 
                    TenderCreationsCategory="материалы"

                }
                
            );



            
    context.SaveChanges();
}
} }

    //   public long TenderId { get; set; }
    //   public long TenderNumber {get;set;}
    //   public DateTime TenderDate {get;set;}
    //   public DateTime TenderAccessDate {get;set;}
    //   public string TenderName { get; set; }
    //   public string TenderPictUrl {get;set;}
    //   public string TenderDesk { get; set; }
    //   public string LocationCoordinates {get;set;}
    //   public DateTime TenderStartDate { get; set; }
    //   public DateTime TenderEndDate { get; set; }
    //   public string Location { get; set; }
    //   public bool Elect { get; set; } = false;
    //   public bool PageFlag { get; set; } = false;