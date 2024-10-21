import { Component } from '@angular/core';


@Component({
  selector: 'app-staff-perf',
  templateUrl: './staff-perf.component.html',
  styleUrls: ['./staff-perf.component.css']
})
export class StaffPerfComponent {
  // products: any[] = [
  //   {
  //     name: 'John Doe',
  //     price: 5000, // Example price for counselling ongoing
  //     category: 'University of XYZ', // Identified University
  //     quantity: 1, // Applied to University
  //     inventoryStatus: 'Received', // Offer Letter Received
  //     rating: 4, // Financing
  //     visaApproved: true, // Visa Approved
  //     deferredStudents: false, // Deferred Students
  //     droppedStudents: true // Dropped/In-Active Students
  //   },
  //   {
  //     name: 'Jane Smith',
  //     price: 6000,
  //     category: 'University of ABC',
  //     quantity: 1,
  //     inventoryStatus: 'Pending', // Offer Letter Received
  //     rating: 3,
  //     visaApproved: false,
  //     deferredStudents: true,
  //     droppedStudents: false
  //   },
  //   {
  //     name: 'Emily Johnson',
  //     price: 5500,
  //     category: 'University of DEF',
  //     quantity: 1,
  //     inventoryStatus: 'Received',
  //     rating: 5,
  //     visaApproved: true,
  //     deferredStudents: false,
  //     droppedStudents: false
  //   },
  //   {
  //     name: 'Michael Brown',
  //     price: 7000,
  //     category: 'University of GHI',
  //     quantity: 1,
  //     inventoryStatus: 'In Progress', // Offer Letter Received
  //     rating: 2,
  //     visaApproved: false,
  //     deferredStudents: false,
  //     droppedStudents: true
  //   },
  //   {
  //     name: 'Sarah Davis',
  //     price: 6500,
  //     category: 'University of JKL',
  //     quantity: 1,
  //     inventoryStatus: 'Received',
  //     rating: 4,
  //     visaApproved: true,
  //     deferredStudents: false,
  //     droppedStudents: false
  //   }
  // ];


  products = [
    {
      img:'data:image/jpeg;base64,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',
      counsellingOngoing: 'Yes',
      identifiedUniversity: 'University A',
      appliedToUniversity: 'Applied',
      offerLetterReceived: 'Received',
      financing: 'Approved',
      feePaymentCompleted: 'Completed',
      visaApproved: 'Approved',
      deferredStudents: 5,
      droppedStudents: 2
    },
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThTTxkzclVIMdNS1km1gEHdDAcW-PkrDCvXG3yAbhYcnjFrOnodbyEqpNAczpDTXJ1sUM&usqp=CAU',
      counsellingOngoing: 'No',
      identifiedUniversity: 'University B',
      appliedToUniversity: 'Not Applied',
      offerLetterReceived: 'Pending',
      financing: 'In Progress',
      feePaymentCompleted: 'Not Completed',
      visaApproved: 'Pending',
      deferredStudents: 1,
      droppedStudents: 0
    },
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThTTxkzclVIMdNS1km1gEHdDAcW-PkrDCvXG3yAbhYcnjFrOnodbyEqpNAczpDTXJ1sUM&usqp=CAU',
      counsellingOngoing: 'No',
      identifiedUniversity: 'University B',
      appliedToUniversity: 'Not Applied',
      offerLetterReceived: 'Pending',
      financing: 'In Progress',
      feePaymentCompleted: 'Not Completed',
      visaApproved: 'Pending',
      deferredStudents: 1,
      droppedStudents: 0
    },{
      img:'https://www.icon0.com/free/static2/preview2/stock-photo-teen-boy-avatar-people-icon-character-cartoon-33257.jpg',
      counsellingOngoing: 'Yes',
      identifiedUniversity: 'University A',
      appliedToUniversity: 'Applied',
      offerLetterReceived: 'Rejected',
      financing: 'Approved',
      feePaymentCompleted: 'Half-Paid',
      visaApproved: 'Rejected',
      deferredStudents: 5,
      droppedStudents: 2
    },
  ];

  getSeverity(visaApproved: string) {
    switch (visaApproved) {
      case 'Approved':
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
