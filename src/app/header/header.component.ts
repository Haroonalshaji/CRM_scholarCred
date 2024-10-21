import { Component, OnInit, EventEmitter, Output, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarEvent = new EventEmitter<void>();
  isdropdownOpen: boolean = false;
  isnotification: boolean = false;
  dropdownOpen() {
    this.isdropdownOpen = !this.isdropdownOpen;
  }

  notificationOpen(){
    this.isnotification = !this.isnotification;
  }

  ngOnInit(): void {
  }
  toggleSidebar() {
    this.toggleSidebarEvent.emit();
  }
  @HostListener('document:click', ['$event'])
  closeDropdown(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const newtarget = event.target as HTMLElement;
    if (!target.closest('.dropdown') && !target.classList.contains('pi-user')) {
      this.isdropdownOpen = false; // Close dropdown if clicked outside
    }
    if (!newtarget.closest('.dropdown-notification') && !target.classList.contains('pi-bell')) {
      this.isnotification = false; // Close dropdown if clicked outside
    }
  }
}
