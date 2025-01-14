import clsx from 'clsx'
import Heading from '@theme/Heading'

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and used to get your
        website up and running quickly.
      </>
    )
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go ahead and move your
        docs into the <code>docs</code> directory.
      </>
    )
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can be extended while
        reusing the same header and footer.
      </>
    )
  }
]

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className='mx-auto h-52 w-52' role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <Heading as='h3' className='mb-2 text-xl font-bold'>
          {title}
        </Heading>
        <p className='mx-auto max-w-sm'>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className='py-10'>
      <div className='container max-w-7xl'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
