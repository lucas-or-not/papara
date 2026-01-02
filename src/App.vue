<template>
  <div class="min-h-screen bg-bg-primary flex flex-col">
    <TopBar 
      :account-number="accountNumber"
      @menu-click="handleMenuClick"
      @chat-click="handleChatClick"
      @profile-click="handleProfileClick"
    />
    
    <div class="flex-1 overflow-y-auto pb-4">
      <FeatureCarousel @feature-click="handleFeatureClick" />
      
      <AccountBalance 
        :balance="balance"
        :iban="iban"
        @deposit-click="handleDepositClick"
        @card-click="handleCardClick"
        @send-click="handleSendClick"
      />
      
      <NotificationCard @click="handleNotificationClick" />
      
      <ExperienceSection 
        :current-step="2"
        :total-steps="5"
        @action-click="handleExperienceAction"
      />
      
      <AccountActivity @transaction-click="handleTransactionClick" />
      
      <CashbackSection 
        :target-amount="500"
        :spent-amount="0"
      />
    </div>
    
    <BottomNav @nav-click="handleNavClick" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TopBar from './components/layout/TopBar.vue'
import BottomNav from './components/layout/BottomNav.vue'
import FeatureCarousel from './components/sections/FeatureCarousel.vue'
import AccountBalance from './components/sections/AccountBalance.vue'
import NotificationCard from './components/sections/NotificationCard.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import AccountActivity from './components/sections/AccountActivity.vue'
import CashbackSection from './components/sections/CashbackSection.vue'

const accountNumber = ref('5555678901')
const balance = ref(0)
const iban = ref('TR05 0001 0009 9901 4447 7850 13')

const handleMenuClick = () => {
  console.log('Menu clicked')
}

const handleChatClick = () => {
  console.log('Chat clicked')
}

const handleProfileClick = () => {
  console.log('Profile clicked')
}

const handleFeatureClick = (featureId) => {
  console.log('Feature clicked:', featureId)
}

const handleDepositClick = () => {
  console.log('Deposit/Withdraw clicked')
}

const handleCardClick = () => {
  console.log('Card clicked')
}

const handleSendClick = () => {
  console.log('Send clicked')
}

const handleNotificationClick = () => {
  console.log('Notification clicked')
}

const handleExperienceAction = (actionId) => {
  console.log('Experience action clicked:', actionId)
}

const handleTransactionClick = (transactionId) => {
  console.log('Transaction clicked:', transactionId)
}

const handleNavClick = (navId) => {
  console.log('Navigation clicked:', navId)
}
</script>
