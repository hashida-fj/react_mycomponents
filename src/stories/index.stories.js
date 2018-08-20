import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Explorer from '../components/explorer';
import ExplorerListitem from '../components/explorer_listitem';
import TagsHolder from '../components/tags_holder';
import TagSelector from '../components/tag_selector';

import TestSelect from '../components/select'

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


const tags = [
    {content: "React", color: "primary"},
    {content: "typescript", color: "secondary"},
];

storiesOf('Tag', module)
    .add("tags", () =>
         <TagsHolder tags={tags}/>
        )
    .add("Input", () =>
         <TagSelector/>
        );


storiesOf('React Select', module)
    .add("tags", () =>
         <TestSelect />
        );






