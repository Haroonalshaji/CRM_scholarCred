import { Component, OnInit } from '@angular/core';

export class Product {
  name!: string;
  category!: string;
  price!: number;
  inventoryStatus!: string;
  rating!: number;
  image!: string;
}
@Component({
  selector: 'app-accounts-overview',
  templateUrl: './accounts-overview.component.html',
  styleUrls: ['./accounts-overview.component.css']
})



export class AccountsOverviewComponent implements OnInit {
  // products: Product[] = [
  //   {
  //     name: 'Black Watch',
  //     category: 'Accessories',
  //     price: 59.99,
  //     inventoryStatus: 'INSTOCK',
  //     rating: 4.5,
  //     image: 'black-watch.jpg',
  //   },
  //   {
  //     name: 'Gaming Laptop',
  //     category: 'Electronics',
  //     price: 999.99,
  //     inventoryStatus: 'INSTOCK',
  //     rating: 4.8,
  //     image: 'gaming-laptop.jpg',
  //   },
  //   {
  //     name: 'Sneakers',
  //     category: 'Footwear',
  //     price: 79.99,
  //     inventoryStatus: 'OUTOFSTOCK',
  //     rating: 4.0,
  //     image: 'sneakers.jpg',
  //   },
  //   {
  //     name: 'Bluetooth Speaker',
  //     category: 'Electronics',
  //     price: 49.99,
  //     inventoryStatus: 'INSTOCK',
  //     rating: 4.7,
  //     image: 'bluetooth-speaker.jpg',
  //   },
  //   {
  //     name: 'Leather Bag',
  //     category: 'Accessories',
  //     price: 129.99,
  //     inventoryStatus: 'LOWSTOCK',
  //     rating: 4.2,
  //     image: 'leather-bag.jpg',
  //   },
  // ];


  accountsData = [
    { icon: 'pi pi-dollar', label: 'Payments Received', amount: '$10,000', description: 'Total payments received' },
    { icon: 'pi pi-file', label: 'Receivables/Open Invoices', amount: '$2,500', description: 'Unpaid invoices' },
    { icon: 'pi pi-external-link', label: 'Outward Payment', amount: '$3,000', description: 'Payments made to vendors' }
  ];
  ngOnInit(): void {
    // console.log(this.products); // This should log the products array to the console
  }
  
  getSeverity(product: Product): string | undefined {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return undefined;
    }
  }

}
