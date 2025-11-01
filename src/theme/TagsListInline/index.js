import React from 'react'
import clsx from 'clsx'
import Translate from '@docusaurus/Translate'
import Tag from '@theme/Tag'
import styles from './styles.module.css'
export default function TagsListInline({ tags }) {
  return (
    <>
      <b>
        <Translate id='theme.tags.tagsListLabel' description='The label alongside a tag list'>
          Tags:
        </Translate>
      </b>
      <ul className={clsx(styles.tags, 'padding--none', 'mx-0 mb-1')}>
        {tags.map((tag) => (
          <li key={tag.permalink} className={styles.tag}>
            <Tag {...tag} />
          </li>
        ))}
      </ul>
    </>
  )
}
