import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Explorer from '../components/explorer';
import ExplorerListitem from '../components/explorer_listitem';
import Tag from '../components/tag.tsx';

import 'bootstrap/dist/css/bootstrap.min.css';

storiesOf('Explorer', module)
    .add("listitem", () =>
         <div>
         <ExplorerListitem open={true} caret={true}
         name="FolderA" />
         <br/>
         <ExplorerListitem open={false} caret={true}
         name="FolderB" />
         <br/>
         <ExplorerListitem open={true} caret={false}
         name="FolderC" />
         </div>
        );


const root = [
  {name: "etc"},
  {name: "var"},
  {name: "lib"},
  {name: "home",
   children: [
     {name: "hashida",
      children: [
        {name: "work"},
        {name: "dot_files"},
        {name: "desktop"},
      ]
     },
     {name: "tashiro",
      children: [
        {name: "work"},
        {name: "desktop"},
      ]
     },
     {name: "nakamura",
      children: [
          {name: "work"},
      ]
     },
   ]
  }
];

storiesOf('Explorer', module)
    .add("nested list", () =>
         <Explorer root={root}/>
        );

storiesOf('Tag', module)
    .add("nested list", () =>
         <div>
         <Tag content="Primary"/>
         <Tag content="React"/>
         <Tag content="Typescript"/>
         <Tag content="PyTorch"/>
         </div>
        );





