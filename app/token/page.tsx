import { Tokenomic } from "../widgets/tokenomic/Tokenomic"
import ChunkedStatisticsToken from "../widgets/chunkedStatistics/ChunkedStatisticToken"
import { StatisticApi } from "../widgets/statisticApi/StatisticApi"
import TokenInfo from "../widgets/tokenInfo/TokenInfo"
import { Contacts } from "../widgets/contacts/Contacts"

const Token = () => {
  return (
    <div>
      <TokenInfo/>
      <Tokenomic/>
      <ChunkedStatisticsToken/>
      <StatisticApi/>
      <Contacts/>
    </div>
  )
}

export default Token
