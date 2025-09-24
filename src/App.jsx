import { useState, useEffect } from 'react'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Users, Zap, Activity } from 'lucide-react'
import GrowthTab from './components/CrescimentoSeguidores'
import PerformanceTab from './components/DesempenhoFisico.jsx'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedModel, setSelectedModel] = useState('exponencial')
  const [selectedMetric, setSelectedMetric] = useState('posicao')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json')
        const jsonData = await response.json()
        setData(jsonData)
        setLoading(false)
      } catch (error) {
        console.error('Erro ao carregar dados:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleModelChange = (model) => {
    setSelectedModel(model)
    const buttons = document.querySelectorAll('[data-model-button]')
    buttons.forEach(btn => {
      btn.classList.remove('bg-primary', 'text-primary-foreground')
      btn.classList.add('bg-secondary', 'text-secondary-foreground')
    })
    
    const selectedButton = document.querySelector(`[data-model-button="${model}"]`)
    if (selectedButton) {
      selectedButton.classList.remove('bg-secondary', 'text-secondary-foreground')
      selectedButton.classList.add('bg-primary', 'text-primary-foreground')
    }
  }

  const handleMetricChange = (metric) => {
    setSelectedMetric(metric)
    const event = new CustomEvent('metricChanged', { 
      detail: { metric, timestamp: new Date().toISOString() } 
    })
    window.dispatchEvent(event)
  }

  useEffect(() => {
    const handleMetricChanged = (event) => {
      console.log('Métrica alterada:', event.detail)
    }

    window.addEventListener('metricChanged', handleMetricChanged)
    return () => window.removeEventListener('metricChanged', handleMetricChanged)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Activity className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p>Carregando dados...</p>
        </div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Erro ao carregar os dados</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {data.projeto.titulo}
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            {data.projeto.descricao}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {data.projeto.autores.map((autor, index) => (
              <Badge key={index} variant="secondary">
                {autor}
              </Badge>
            ))}
          </div>
        </div>

        <Tabs defaultValue="seguidores" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="seguidores" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Crescimento de Seguidores
            </TabsTrigger>
            <TabsTrigger value="desempenho" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Desempenho Físico
            </TabsTrigger>
          </TabsList>

          <TabsContent value="seguidores" className="space-y-6">
            <GrowthTab 
              data={data} 
              selectedModel={selectedModel} 
              onModelChange={handleModelChange} 
            />
          </TabsContent>

          <TabsContent value="desempenho" className="space-y-6">
            <PerformanceTab 
              data={data} 
              selectedMetric={selectedMetric} 
              onMetricChange={handleMetricChange} 
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default App

