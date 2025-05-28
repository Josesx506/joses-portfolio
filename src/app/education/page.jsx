import Conferences from '@/components/section/Conferences';
import FeatResearch from '@/components/section/FeatResearch';
import Publications from '@/components/section/Publications';
import Universities from '@/components/section/Universities';

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
