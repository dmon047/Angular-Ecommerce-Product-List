import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    { id: 1, name: 'ROG Strix G18', description: 'Enjoy effortless Windows 11 Pro gaming performance with the Strix G18', price: 159995, imageUrl: 'assets/img/strix.jpeg' },
    { id: 2, name: 'Alienware M18 R2', description: 'Intel® Core™ i7 14650HX Windows 11 Home NVIDIA® GeForce RTX™ 4060 32 GB DDR5 1 TB SSD', price: 95000, imageUrl: 'assets/img/m18.jpeg' },
    { id: 3, name: 'HP Laptop 15t-fd000, 15.6', description: 'Windows 11 HomeIntel® Core™ i7-1355U (up to 5.0 GHz, 12 MB L3 cache, 10 cores, 12 threads) + Intel® Iris® Xe Graphics8 GB DDR4-3200 SDRAM (1 X 8 GB)256 GB PCIe® NVMe™ M.2 SSD', price: 28000, imageUrl: 'assets/img/HP.jpeg' },
    { id: 4, name: 'MacBook Pro (14-inch, M4 Pro or M4 Max, 2024) - Tech Specs', description: '12-core CPU with 8 performance cores and 4 efficiency cores, 14-core CPU with 10 performance cores and 4 efficiency cores 16-core GPU, 20-core GPU Hardware-accelerated ray tracing', price: 250000, imageUrl: 'assets/img/mac.jpeg' },
    { id: 5, name: 'MateBook X Pro', description: 'Discover the lightest-ever HUAWEI MateBook X Pro.Experience lightning-fast processing, exceptional heat management, and an awe-inspiring design — right at your fingertips!', price: 130000, imageUrl: 'assets/img/H.jpeg' }
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
