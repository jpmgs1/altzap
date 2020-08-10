import React, { FC } from 'react'
import { Skeleton } from 'antd'

import { useTenantConfig } from '../../contexts/TenantContext'
import { AltMessage, Message } from '../../intlConfig'
import { TenantContextState } from '../../typings'

export const pendenciesTest: Array<{
  test: (tenantContext: TenantContextState) => boolean
  message: AltMessage
}> = [
  {
    test: ({ tenant }) => {
      return !tenant || !tenant.whatsapp || !tenant.color || !tenant.category
    },
    message: 'tenant.pendencies.metadata',
  },
  {
    test: ({ tenant }) => !tenant?.categories?.length,
    message: 'tenant.pendencies.categories',
  },
  {
    test: ({ products }) => !products?.length,
    message: 'tenant.pendencies.products',
  },
  {
    test: ({ tenant }) => !tenant?.openingHours?.intervals?.length,
    message: 'tenant.pendencies.openingHours',
  },
  {
    test: ({ tenant }) => !tenant?.shippingStrategies,
    message: 'tenant.pendencies.logistics',
  },
  {
    test: ({ tenant }) => !tenant?.address?.logradouro,
    message: 'tenant.pendencies.address',
  },
  {
    test: ({ tenant }) => !tenant?.paymentMethods?.length,
    message: 'tenant.pendencies.payment',
  },
]

type Props = {
  pendencies: typeof pendenciesTest
}

const Pendencies: FC<Props> = ({ pendencies }) => {
  const tenantContext = useTenantConfig()

  if (tenantContext.loading) {
    return <Skeleton active />
  }

  return (
    <div className="pa2">
      <h2 className="tc">
        <Message id="tenant.pendencies.title" />
      </h2>
      <ul>
        {pendencies.map(({ message }, i) => (
          <li key={i}>
            <Message id={message} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pendencies
