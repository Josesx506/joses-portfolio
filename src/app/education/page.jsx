import Conferences from '@/components/sections/Conferences';
import FeatResearch from '@/components/sections/FeatResearch';
import Publications from '@/components/sections/Publications';
import Universities from '@/components/sections/Universities';

export default function page() {
  const eduStyle = {
    fontFamily: 'Inter',
    display: 'grid',
    gap: '3em',
    paddingBottom: '2em',
  }
  return (
    <div style={eduStyle}>
      <Universities />
      <Publications />
      <Conferences />
      <FeatResearch />
    </div>
  )
}
