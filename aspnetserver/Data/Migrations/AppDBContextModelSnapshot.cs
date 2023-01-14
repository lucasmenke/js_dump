﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using aspnetserver.Data;

#nullable disable

namespace aspnetserver.Data.Migrations
{
    [DbContext(typeof(AppDBContext))]
    partial class AppDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.13");

            modelBuilder.Entity("aspnetserver.Data.Post", b =>
                {
                    b.Property<int>("PostId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Content")
                        .IsRequired()
                        .HasMaxLength(1000)
                        .HasColumnType("TEXT");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("TEXT");

                    b.HasKey("PostId");

                    b.ToTable("Posts");

                    b.HasData(
                        new
                        {
                            PostId = 1,
                            Content = "Post Nr. 1 has really intersting content",
                            Title = "Post Nr. 1"
                        },
                        new
                        {
                            PostId = 2,
                            Content = "Post Nr. 2 has really intersting content",
                            Title = "Post Nr. 2"
                        },
                        new
                        {
                            PostId = 3,
                            Content = "Post Nr. 3 has really intersting content",
                            Title = "Post Nr. 3"
                        },
                        new
                        {
                            PostId = 4,
                            Content = "Post Nr. 4 has really intersting content",
                            Title = "Post Nr. 4"
                        },
                        new
                        {
                            PostId = 5,
                            Content = "Post Nr. 5 has really intersting content",
                            Title = "Post Nr. 5"
                        },
                        new
                        {
                            PostId = 6,
                            Content = "Post Nr. 6 has really intersting content",
                            Title = "Post Nr. 6"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}