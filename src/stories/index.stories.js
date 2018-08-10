import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Explorer from '../components/explorer';
// import ExplorerList from '../components/explorer_list';
import ExplorerListitem from '../components/explorer_listitem';

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



