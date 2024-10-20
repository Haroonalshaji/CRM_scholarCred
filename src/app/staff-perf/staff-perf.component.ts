import { Component } from '@angular/core';


@Component({
  selector: 'app-staff-perf',
  templateUrl: './staff-perf.component.html',
  styleUrls: ['./staff-perf.component.css']
})
export class StaffPerfComponent {
  products: any[] = [
    {
      name: 'John Doe',
      price: 5000, // Example price for counselling ongoing
      category: 'University of XYZ', // Identified University
      quantity: 1, // Applied to University
      inventoryStatus: 'Received', // Offer Letter Received
      rating: 4, // Financing
      visaApproved: true, // Visa Approved
      deferredStudents: false, // Deferred Students
      droppedStudents: true // Dropped/In-Active Students
    },
    {
      name: 'Jane Smith',
      price: 6000,
      category: 'University of ABC',
      quantity: 1,
      inventoryStatus: 'Pending', // Offer Letter Received
      rating: 3,
      visaApproved: false,
      deferredStudents: true,
      droppedStudents: false
    },
    {
      name: 'Emily Johnson',
      price: 5500,
      category: 'University of DEF',
      quantity: 1,
      inventoryStatus: 'Received',
      rating: 5,
      visaApproved: true,
      deferredStudents: false,
      droppedStudents: false
    },
    {
      name: 'Michael Brown',
      price: 7000,
      category: 'University of GHI',
      quantity: 1,
      inventoryStatus: 'In Progress', // Offer Letter Received
      rating: 2,
      visaApproved: false,
      deferredStudents: false,
      droppedStudents: true
    },
    {
      name: 'Sarah Davis',
      price: 6500,
      category: 'University of JKL',
      quantity: 1,
      inventoryStatus: 'Received',
      rating: 4,
      visaApproved: true,
      deferredStudents: false,
      droppedStudents: false
    }
  ];

  getSeverity(status: string) {
    switch (status) {
      case 'Received':
        return 'success';
      case 'Pending':
        return 'info';
      case 'In Progress':
        return 'warning';
      default:
        return 'danger';
    }
  }
}
