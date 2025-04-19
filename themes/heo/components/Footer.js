import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import CopyRightDate from '@/components/CopyRightDate'
import PoweredBy from '@/components/PoweredBy'
import { siteConfig } from '@/lib/config'
import SocialButton from './SocialButton'
/**
 * 页脚
 * @returns
 */
const Footer = () => {
  const BEI_AN = siteConfig('BEI_AN')
  const BEI_AN_LINK = siteConfig('BEI_AN_LINK')
  const BIO = siteConfig('BIO')

  return (
    <footer className='relative flex-shrink-0 bg-white dark:bg-[#1a191d] justify-center text-center m-auto w-full leading-6 text-gray-600 dark:text-gray-100 text-sm'>
      {/* 颜色过度区 */}
      <div className='h-32 bg-gradient-to-b from-[#f7f9fe] to-white dark:bg-[#1a191d] dark:from-inherit dark:to-inherit' />

      {/* 社交按钮 */}
      <div className='w-full h-24'>
        <SocialButton />
      </div>

      {/* 底部信息容器 */}
      <div className='w-full flex flex-col items-center justify-center bg-[#f1f3f7] dark:bg-[#21232A] border-t dark:border-t-[#3D3D3F] p-4 space-y-2'>
        {/* 统计信息 */}
        <div className='flex space-x-4'>
          <span className='busuanzi_container_site_pv'>
            <i className='fas fa-eye mr-1' />
            <span className='busuanzi_value_site_pv' />
          </span>
          <span className='busuanzi_container_site_uv'>
            <i className='fas fa-users mr-1' />
            <span className='busuanzi_value_site_uv' />
          </span>
        </div>

        {/* 版权信息 */}
        <div className='flex flex-col items-center space-y-1'>
          <PoweredBy />
          <div className='flex items-center space-x-1'>
            <CopyRightDate />
            <a 
              href="/about" 
              className='underline font-semibold dark:text-gray-300'
            >
              {siteConfig('AUTHOR')}
            </a>
            {BIO && <span className='mx-1'>| {BIO}</span>}
          </div>
        </div>

        {/* 备案信息 */}
        <div className='flex items-center space-x-2'>
          {BEI_AN && (
            <a 
              href={BEI_AN_LINK} 
              className='flex items-center hover:text-blue-600 dark:hover:text-blue-400'
            >
              <i className='fas fa-shield-alt mr-1' />
              {BEI_AN}
            </a>
          )}
          <BeiAnGongAn />
        </div>
      </div>
    </footer>
  )
}

export default Footer
