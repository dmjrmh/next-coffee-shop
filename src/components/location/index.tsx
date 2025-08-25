'use client'

import { useMemo, useState } from 'react'
import STORES, { Store } from '../../constants/storeLocation'
import { locationConstant } from '../../constants/text'

function StoreRow({ store }: { store: Store }) {
  return (
    <div className="p-4  mb-4 flex justify-between items-start">
      <div className="flex flex-col gap-[8px]">
        <h3 className="text-[#77675d] text-xl font-semibold">{store.name}</h3>
        <p className="text-sm text-[#000000]">{store.address}</p>
        <div className="text-sm text-[#000000]">{store.openHour}</div>
      </div>
      <div className="text-sm text-[#000000]">
        {store.distanceKm}
        {locationConstant.DISTANCE_UNIT}
      </div>
    </div>
  )
}

export default function Location() {
  const [query, setQuery] = useState('')
  const [featureFilters, setFeatureFilters] = useState<Record<string, boolean>>(
    {}
  )

  const features = useMemo(() => {
    const featureSet = new Set<string>()
    STORES.forEach(store =>
      store.features?.forEach(feature => featureSet.add(feature))
    )
    return Array.from(featureSet)
  }, [])

  const filteredStores = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return STORES.filter(store => {
      if (normalizedQuery) {
        const matchesName = store.name.toLowerCase().includes(normalizedQuery)
        const matchesAddress = store.address
          .toLowerCase()
          .includes(normalizedQuery)
        if (!matchesName && !matchesAddress) return false
      }
      // features
      for (const [feature, isEnabled] of Object.entries(featureFilters)) {
        if (isEnabled && !(store.features || []).includes(feature)) return false
      }
      return true
    })
  }, [query, featureFilters])

  function toggleFeature(feature: string) {
    setFeatureFilters(prev => ({ ...prev, [feature]: !prev[feature] }))
  }

  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-3 gap-8 p-6">
      <div className="col-span-1">
        <h2 className="text-3xl font-bold mb-4">{locationConstant.TITLE}</h2>
        <div className="mb-4">
          <input
            placeholder={locationConstant.SEARCH_PLACEHOLDER}
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full box-border h-12 p-3 rounded border border-[#444] bg-[transparent] text-black placeholder:text-gray-500 appearance-none focus:outline-none focus:ring-0"
          />
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">
            {locationConstant.SHOWS_WITH}
          </h4>
          <div className="flex flex-col gap-2">
            {features.map(feature => (
              <label key={feature} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={!!featureFilters[feature]}
                  onChange={() => toggleFeature(feature)}
                />
                {feature}
              </label>
            ))}
          </div>
        </div>
      </div>

      <section className="col-span-2">
        <div className="flex flex-col">
          {filteredStores.length === 0 && (
            <div className="text-gray-400">{locationConstant.NO_STORES}</div>
          )}
          {filteredStores.map(store => (
            <StoreRow key={store.id} store={store} />
          ))}
        </div>
      </section>
    </div>
  )
}
// component implemented above (export default Location)
