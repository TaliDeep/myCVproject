import { Component } from '@angular/core';
import { Contacts } from '../contacts/contacts';
import { About } from '../about/about';
import { Skills } from '../skills/skills';
import { Workexperience } from '../workexperience/workexperience';

@Component({
  selector: 'app-background',
  imports: [Contacts,
    About,
    Skills,
    Workexperience
  ],
  templateUrl: './background.html',
  styleUrl: './background.css',
})
export class Background {

}
