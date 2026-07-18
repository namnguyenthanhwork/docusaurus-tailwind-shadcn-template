import clsx from 'clsx'
import type { ReactNode } from 'react'

import Translate from '@docusaurus/Translate'

import Tag from '@theme/Tag'
import type { Props } from '@theme/TagsListInline'

import styles from './styles.module.css'

export default function TagsListInline({ tags }: Props): ReactNode {
  return (
    <>
      <b className='mr-2'>
        <Translate id='theme.tags.tagsListLabel' description='The label alongside a tag list'>
          Tags:
        </Translate>
      </b>
      <ul className={clsx(styles.tags, 'padding--none')}>
        {tags.map((tag) => (
          <li key={tag.permalink} className={styles.tag}>
            <Tag {...tag} />
          </li>
        ))}
      </ul>
    </>
  )
}
