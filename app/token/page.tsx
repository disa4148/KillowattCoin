'use client'

import { Tokenomic } from "../widgets/tokenomic/Tokenomic"
import ChunkedStatisticsToken from "../widgets/chunkedStatistics/ChunkedStatisticToken"
import { StatisticApi } from "../widgets/statisticApi/StatisticApi"
import TokenInfo from "../widgets/tokenInfo/TokenInfo"
import { Contacts } from "../widgets/contacts/Contacts"
import LoadingScreen from "../widgets/loadingScreen/LoadingScreen"
import { useEffect, useState } from "react"
const Token = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {!loading ? (
    <div>
      <TokenInfo/>
      <Tokenomic/>
      <ChunkedStatisticsToken/>
      <StatisticApi/>
      <Contacts/>
    </div>
    ) : (
      <LoadingScreen />
    )}
    </>
  )
}

export default Token
