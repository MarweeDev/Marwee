import { Component, OnInit } from '@angular/core';
import { CommonModule } from  '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  /////////////////////////////////
  /// Variable para controlar la vista modular
  public currentIndexView : number = 0;
  
  /////////////////////////////////
  /// Variable para controlar el contenido modular
  public currentIndex : number = 0;
  
  /////////////////////////////////
  /// Variable lista array para contenido modular
  slides = [
    {
      content: [
        {
          img: "/page/localhost_4200_sales_register.png",
          title: "Gestión de ordenes",
          text: "Simplifica la gestión de ventas con herramientas completas para crear, gestionar y procesar pagos de órdenes, además de generar reportes detallados que facilitan el análisis y la toma de decisiones."
        },
        {
          img: "/page/localhost_4200_sales_order.png",
          title: "Orden de productos",
          text: "Administra y controla tu inventario de manera eficiente, asegurando que siempre tengas los productos necesarios para satisfacer la demanda de tus clientes."
        },
        {
          img: "/page/localhost_4200_sales_payments.png",
          title: "Proceso de pago",
          text: "Obtén reportes detallados y en tiempo real para tomar decisiones estratégicas basadas en datos precisos y actualizados."
        },
        {
          img: "/page/localhost_4200_sales_register_detail.png",
          title: "Detalle de orden",
          text: "Obtén reportes detallados y en tiempo real para tomar decisiones estratégicas basadas en datos precisos y actualizados."
        },
        {
          img: "/page/localhost_4200_sales_detail_cancel.png",
          title: "Proceso de anulación",
          text: "Obtén reportes detallados y en tiempo real para tomar decisiones estratégicas basadas en datos precisos y actualizados."
        }
      ]
    },
    {
      content: [
        {
          img: "/page/localhost_4200_sales_register.png",
          title: "Ventas",
          text: "Simplifica la gestión de ventas con herramientas completas para crear, gestionar y procesar pagos de órdenes, además de generar reportes detallados que facilitan el análisis y la toma de decisiones."
        },
        {
          img: "/page/localhost_4200_sales_order.png",
          title: "Compras",
          text: "Administra y controla tu inventario de manera eficiente, asegurando que siempre tengas los productos necesarios para satisfacer la demanda de tus clientes."
        },
        {
          img: "/page/localhost_4200_sales_payments.png",
          title: "Reportes",
          text: "Obtén reportes detallados y en tiempo real para tomar decisiones estratégicas basadas en datos precisos y actualizados."
        }
      ]
    }
  ];

  /////////////////////////////////
  /// Metodo inicialización
  ngOnInit(): void {}

  /////////////////////////////////
  /// Metodo para cambiar de modulo
  public changeModule(id:any) {
    this.currentIndexView = id;
    this.currentIndex = 0;
  }

  /////////////////////////////////
  /// Metodo para adelantar el slider
  public nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides[this.currentIndexView].content.length;
  }

  /////////////////////////////////
  /// Metodo para devolver el slider
  public prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides[this.currentIndexView].content.length) % this.slides[this.currentIndexView].content.length;
  }
}
