import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() isSidebarOpen: boolean = true; // Input from parent to control visibility
  @Input() isMobileView: boolean = false; // Input to check if it's mobile view

  @Output() sidebarClose = new EventEmitter<void>(); // EventEmitter to notify parent component

  constructor() {}

  ngOnInit(): void {}

  // Method to close the sidebar
  closeSidebar(event?: Event): void {
    event?.stopPropagation(); // Prevent click event from bubbling up to parent
    this.sidebarClose.emit(); // Emit the close event to the parent component
  }
}
