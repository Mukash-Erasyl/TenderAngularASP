using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ServerApp.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Tenders",
                columns: table => new
                {
                    TenderId = table.Column<long>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    TenderNumber = table.Column<long>(type: "INTEGER", nullable: false),
                    TenderDate = table.Column<DateTime>(type: "TEXT", nullable: false),
                    TenderAccessDate = table.Column<DateTime>(type: "TEXT", nullable: false),
                    TenderName = table.Column<string>(type: "TEXT", nullable: false),
                    TenderPictUrl = table.Column<string>(type: "TEXT", nullable: false),
                    TenderDesk = table.Column<string>(type: "TEXT", nullable: false),
                    Location = table.Column<string>(type: "TEXT", nullable: false),
                    TenderStartDate = table.Column<DateTime>(type: "TEXT", nullable: false),
                    TenderEndDate = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Longitude = table.Column<double>(type: "REAL", nullable: false),
                    Width = table.Column<double>(type: "REAL", nullable: false),
                    Elect = table.Column<bool>(type: "INTEGER", nullable: false),
                    PageFlag = table.Column<bool>(type: "INTEGER", nullable: false),
                    Category = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tenders", x => x.TenderId);
                });

            migrationBuilder.CreateTable(
                name: "TendersCreate",
                columns: table => new
                {
                    TenderCreateId = table.Column<long>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    TenderCreateNumber = table.Column<long>(type: "INTEGER", nullable: false),
                    TenderCreateUnit = table.Column<string>(type: "TEXT", nullable: false),
                    NameTenderCreations = table.Column<string>(type: "TEXT", nullable: false),
                    TenderDeskCreations = table.Column<string>(type: "TEXT", nullable: false),
                    TenderCreationsCategory = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TendersCreate", x => x.TenderCreateId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Tenders");

            migrationBuilder.DropTable(
                name: "TendersCreate");
        }
    }
}
