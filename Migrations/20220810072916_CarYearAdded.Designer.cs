﻿// <auto-generated />
using System;
using AutoWebApi.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace AutoWebApi.Migrations
{
    [DbContext(typeof(AutoDbContext))]
    [Migration("20220810072916_CarYearAdded")]
    partial class CarYearAdded
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.17")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("AutoWebApi.Models.BodyStyle", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("BodyStyles");
                });

            modelBuilder.Entity("AutoWebApi.Models.Car", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("BodyStyleId")
                        .HasColumnType("int");

                    b.Property<int?>("ColorId")
                        .HasColumnType("int");

                    b.Property<DateTime?>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<int?>("DrivetrainId")
                        .HasColumnType("int");

                    b.Property<double>("Engine")
                        .HasColumnType("float");

                    b.Property<int?>("FuelTypeId")
                        .HasColumnType("int");

                    b.Property<int?>("GearBoxId")
                        .HasColumnType("int");

                    b.Property<string>("ImageUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("ManufacturerId")
                        .HasColumnType("int");

                    b.Property<int>("Mileage")
                        .HasColumnType("int");

                    b.Property<int?>("ModelId")
                        .HasColumnType("int");

                    b.Property<int>("Price")
                        .HasColumnType("int");

                    b.Property<int>("Year")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("BodyStyleId");

                    b.HasIndex("ColorId");

                    b.HasIndex("DrivetrainId");

                    b.HasIndex("FuelTypeId");

                    b.HasIndex("GearBoxId");

                    b.HasIndex("ManufacturerId");

                    b.HasIndex("ModelId");

                    b.ToTable("Cars");
                });

            modelBuilder.Entity("AutoWebApi.Models.Color", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("HexCode")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Colors");
                });

            modelBuilder.Entity("AutoWebApi.Models.Drivetrain", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Drivetrains");
                });

            modelBuilder.Entity("AutoWebApi.Models.FuelType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("FuelTypes");
                });

            modelBuilder.Entity("AutoWebApi.Models.GearBox", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("GearBoxes");
                });

            modelBuilder.Entity("AutoWebApi.Models.Manufacturer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Manufacturers");
                });

            modelBuilder.Entity("AutoWebApi.Models.Model", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("ManufacturerId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("ManufacturerId");

                    b.ToTable("Models");
                });

            modelBuilder.Entity("AutoWebApi.Models.Car", b =>
                {
                    b.HasOne("AutoWebApi.Models.BodyStyle", "BodyStyle")
                        .WithMany("Cars")
                        .HasForeignKey("BodyStyleId");

                    b.HasOne("AutoWebApi.Models.Color", "Color")
                        .WithMany("Cars")
                        .HasForeignKey("ColorId");

                    b.HasOne("AutoWebApi.Models.Drivetrain", "Drivetrain")
                        .WithMany("Cars")
                        .HasForeignKey("DrivetrainId");

                    b.HasOne("AutoWebApi.Models.FuelType", "FuelType")
                        .WithMany("Cars")
                        .HasForeignKey("FuelTypeId");

                    b.HasOne("AutoWebApi.Models.GearBox", "GearBox")
                        .WithMany("Cars")
                        .HasForeignKey("GearBoxId");

                    b.HasOne("AutoWebApi.Models.Manufacturer", "Manufacturer")
                        .WithMany("Cars")
                        .HasForeignKey("ManufacturerId");

                    b.HasOne("AutoWebApi.Models.Model", "Model")
                        .WithMany("Cars")
                        .HasForeignKey("ModelId");

                    b.Navigation("BodyStyle");

                    b.Navigation("Color");

                    b.Navigation("Drivetrain");

                    b.Navigation("FuelType");

                    b.Navigation("GearBox");

                    b.Navigation("Manufacturer");

                    b.Navigation("Model");
                });

            modelBuilder.Entity("AutoWebApi.Models.Model", b =>
                {
                    b.HasOne("AutoWebApi.Models.Manufacturer", null)
                        .WithMany("Models")
                        .HasForeignKey("ManufacturerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("AutoWebApi.Models.BodyStyle", b =>
                {
                    b.Navigation("Cars");
                });

            modelBuilder.Entity("AutoWebApi.Models.Color", b =>
                {
                    b.Navigation("Cars");
                });

            modelBuilder.Entity("AutoWebApi.Models.Drivetrain", b =>
                {
                    b.Navigation("Cars");
                });

            modelBuilder.Entity("AutoWebApi.Models.FuelType", b =>
                {
                    b.Navigation("Cars");
                });

            modelBuilder.Entity("AutoWebApi.Models.GearBox", b =>
                {
                    b.Navigation("Cars");
                });

            modelBuilder.Entity("AutoWebApi.Models.Manufacturer", b =>
                {
                    b.Navigation("Cars");

                    b.Navigation("Models");
                });

            modelBuilder.Entity("AutoWebApi.Models.Model", b =>
                {
                    b.Navigation("Cars");
                });
#pragma warning restore 612, 618
        }
    }
}