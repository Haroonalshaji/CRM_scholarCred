import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scholar_ap';
  isSidebarOpen: boolean = false; // Sidebar is closed by default on mobile
  isMobileView: boolean = false;

  ngOnInit() {
    this.checkScreenSize(); // Initial screen size check
  }

  // Detect screen resizing and adjust sidebar visibility accordingly
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  // Function to toggle the sidebar state
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen; // Toggle the sidebar state
  }

  // Check screen size and set the appropriate view and sidebar state
  checkScreenSize() {
    const width = window.innerWidth;
    this.isMobileView = width < 1024; // Mobile view for screens below 1024px
    // On larger screens, open the sidebar by default if it's toggled
    if (!this.isMobileView) {
      this.isSidebarOpen = true; // Open sidebar by default on larger screens
    }
  }

  // Method to close the sidebar
  closeSidebar(event?: Event): void {
    event?.stopPropagation(); // Prevent click event from bubbling
    this.isSidebarOpen = false; // Close the sidebar
  }
}
