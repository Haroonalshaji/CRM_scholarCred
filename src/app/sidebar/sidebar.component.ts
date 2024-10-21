import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() isSidebarOpen: boolean = true; 
  @Input() isMobileView: boolean = false; 


  constructor() {}

  ngOnInit(): void {}

  // Method to close the sidebar
  // closeSidebar(event?: Event): void {
  //   event?.stopPropagation(); // Prevent click event from bubbling up to parent
  //   this.sidebarClose.emit(); // Emit the close event to the parent component
  // }
}
