import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: 'Unified Workflow',
    imgPath: '/img/Unified.png',
    description: (
      <>
        Simple yet powerful tools integrating image, video, and character pipelines.
      </>
    )
  },
  {
    title: 'Cutting-Edge Generation',
    imgPath: '/img/CuttingEdge.png',
    description: (
      <>
        State-of-the-art AI generating stunningly realistic visuals and consistent characters.
      </>
    )
  },
  {
    title: 'Fine-Tuning & Control',
    imgPath: '/img/Control.png',
    description: (
      <>
        Instantly create custom characters and fine-tune every detail with unparalleled control over your AI creations.
      </>
    )
  }
]

function Feature({ imgPath, title, description }) {
  const fullImgPath = useBaseUrl(imgPath);
  return (
    <div>
      <div className='text--center'>
        <img src={fullImgPath} alt={title} className='mx-auto h-52 w-52 object-contain' />
      </div>
      <div className='text--center padding-horiz--md'>
        <p className='mb-2 text-xl font-bold'>{title}</p>
        <p className='mx-auto max-w-sm'>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className='py-10'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
