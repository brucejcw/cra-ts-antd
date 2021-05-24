import React from 'react'
import { useTranslation } from 'react-i18next'
import SuccessAlert from '@/composed/Alert/SuccessAlert'
import { useGlobalContext } from '@/context/GlobalContext'
import { useUserContext } from '@/context/UserContext'

function Index() {
  const { t } = useTranslation()
  const {
    state: { user },
  } = useUserContext()
  const {
    state: { token },
  } = useGlobalContext()

  return (
    <>
      <h2>
        {t('Welcome to React')}, {user.name}
      </h2>
      <SuccessAlert message={token} size="sm" />
    </>
  )
}

export default Index
