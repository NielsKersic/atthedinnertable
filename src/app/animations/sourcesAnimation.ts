import { trigger, state, style, transition, animate, group, query, stagger, keyframes } from '@angular/animations';

export const sourcesAnimation = [

trigger('slideInOut', [
    state('in', style({
        'max-height': '250px', opacity: 1, visibility: 'visible'
    })),
    state('out', style({
        'max-height': '0px', opacity: 0, visibility: 'hidden'
    })),
    transition('in => out', [group([
        animate('400ms ease-in-out', style({
            opacity: 0
        })),
        animate('300ms ease-in-out', style({
            'max-height': '0px'
        })),
        animate('700ms ease-in-out', style({
            visibility: 'hidden'
        }))
    ]
    )]),
    transition('out => in', [group([
        animate('1ms ease-in-out', style({
            visibility: 'visible'
        })),
        animate('300ms ease-in-out', style({
            'max-height': '250px'
        })),
        animate('800ms ease-in-out', style({
            opacity: 1
        }))
    ]
    )])
  ]),
];