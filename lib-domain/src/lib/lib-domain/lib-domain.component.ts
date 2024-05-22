import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-dm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lib-domain.component.html',
  styleUrl: './lib-domain.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibDomainComponent {}
