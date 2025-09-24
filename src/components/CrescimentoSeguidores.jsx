import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { TrendingUp } from 'lucide-react'

const GrowthTab = ({ data, selectedModel, onModelChange }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Modelos de Crescimento de Seguidores
        </CardTitle>
        <CardDescription>
          Comparação entre modelos exponencial e logístico
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-6">
          <Button
            variant={selectedModel === 'exponencial' ? 'default' : 'secondary'}
            onClick={() => onModelChange('exponencial')}
          >
            Modelo Exponencial
          </Button>
          <Button
            variant={selectedModel === 'logistico' ? 'default' : 'secondary'}
            onClick={() => onModelChange('logistico')}
          >
            Modelo Logístico
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data.funcoes.crescimento_seguidores[selectedModel].dados}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="tempo" 
                  label={{ value: 'Tempo (meses)', position: 'insideBottom', offset: -5 }}
                />
                <YAxis 
                  label={{ value: 'Seguidores', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip 
                  formatter={(value) => [value.toLocaleString(), 'Seguidores']}
                  labelFormatter={(label) => `Mês ${label}`}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="seguidores" 
                  stroke="#8884d8" 
                  strokeWidth={2}
                  dot={{ fill: '#8884d8', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Fórmula</h3>
              <code className="bg-gray-100 p-2 rounded block">
                {data.funcoes.crescimento_seguidores[selectedModel].formula}
              </code>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Descrição</h3>
              <p className="text-gray-600">
                {data.funcoes.crescimento_seguidores[selectedModel].descricao}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Limite</h3>
              <p className="text-gray-600">
                {data.funcoes.crescimento_seguidores[selectedModel].limite}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Interpretação</h3>
              <p className="text-gray-600">
                {data.interpretacoes.crescimento_seguidores[selectedModel]}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default GrowthTab

