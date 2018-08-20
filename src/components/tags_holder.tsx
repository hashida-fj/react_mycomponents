import * as React from 'react';

import Tag from './tag'


interface tag {
  content: string,
  color: string,
}

interface OwnProps {
  tags: tag[],
}

export default class TagsHolder extends React.Component<OwnProps, {}> {

  constructor(props: OwnProps) {
    super(props)
  }

  public render() {
    return(
      this.props.tags.map((tag) => {
        return <Tag content={tag.content} color={tag.color} />
      })
    )
  }
}
