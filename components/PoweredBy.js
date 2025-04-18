import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      <span className='mr-1'>Powered by</span>
      <a
        href='https://www.youtube.com/@Vc%E5%B7%A5%E5%85%B7%E7%AE%B1'
        className='underline justify-start'>
        Vc {siteConfig('2025')}
      </a>
      .
    </div>
  )
}
