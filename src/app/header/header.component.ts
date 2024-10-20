import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarEvent = new EventEmitter<void>(); // Emit the toggle event

  ngOnInit(): void {
    // Implementation if needed
  }

  // Emit the toggle event when the button is clicked
  toggleSidebar() {
    this.toggleSidebarEvent.emit();
  }
}
