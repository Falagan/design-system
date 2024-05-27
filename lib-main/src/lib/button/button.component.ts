import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-gl-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() text: string | undefined;
  @Output() clickEvent = new EventEmitter<MouseEvent>();
  
  /**
   * Handles click events on the button and emits the event to the parent component.
   * 
   * @param event The MouseEvent triggered when the button is clicked.
   */
  public onClick(event: MouseEvent): void {
    this.clickEvent.emit(event);
  }
}