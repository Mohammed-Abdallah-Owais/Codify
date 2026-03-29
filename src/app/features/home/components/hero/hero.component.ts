import { Component } from '@angular/core';
import { HintBubbleComponent } from '../../../../shared/components/hint-bubble/hint-bubble.component';
import { Hint } from '../../../../core/models/hint.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HintBubbleComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  sampleHint: Hint = {
    stepIndex: 2,
    totalSteps: 4,
    text: 'Think about what happens when you reach a cell you\'ve already explored. Could you store that result instead of recomputing it?',
    problemId: 'sample-1'
  };
}
