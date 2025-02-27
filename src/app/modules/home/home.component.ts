import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  slides = [
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
  ];

  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
