import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'
import PlaidLink from './PlaidLink'

const TotalBalanceBox = ({
  accounts = [], totalBanks, totalCurrentBalance, user
}: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts} />
      </div>

      <div className="flex flex-col gap-6">
        <div className='flex justify-between'>
          <h2 className="header-2">
            {totalBanks} Bank Accounts
          </h2>
          <PlaidLink user={user} />
        </div>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">
            Total Current Balance
          </p>

          <div className="total-balance-amount flex-center gap-2">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TotalBalanceBox