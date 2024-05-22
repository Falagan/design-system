import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-gl',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lib-global.component.html',
  styleUrl: './lib-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibGlobalComponent {}
