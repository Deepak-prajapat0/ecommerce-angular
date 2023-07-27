import { Component } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  shop: string[] = [
    'Shop All',
    'Laptops',
    'Tablets',
    'Drones & Cameras',
    'Audio',
    'Mobile',
  ];

  support: string[] = ['Contact Us', 'Help Center', 'About Us', 'Careers'];

  policy: string[] = [
    'Shipping & Returns ',
    'Terms & Conditions',
    'Payment Methods ',
    'FAQ',
  ];
}
