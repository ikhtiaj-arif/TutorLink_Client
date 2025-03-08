
import TLContainer from '@/components/ui/core/TLContainer';
import StatisticCard from './StatisticsCard';

export default function StatisticCardsContainer() {
  return (
    <TLContainer className="pt-32">
      <div className="flex space-x-6">
        {/* First card */}
        <StatisticCard
          icon="star"
          color="bg-yellow-100"
          number="5/5"
          description="Our star teachers with a 5 star rating and more than 219 reviews."
        />

        {/* Second card */}
        <StatisticCard
          icon="tag"
          color="bg-red-100"
          number="$46/h"
          description="The best prices: 95% of teachers offer their first lessons for free and the average lesson cost is $46/hr."
        />

        {/* Third card */}
        <StatisticCard
          icon="clock"
          color="bg-blue-100"
          number="6h"
          description="Quick as lightning, our teachers usually respond in less than 6hrs."
        />
      </div>
    </TLContainer>
  );
}
