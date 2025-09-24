import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Activity } from 'lucide-react'

const PerformanceTab = ({ data, selectedMetric, onMetricChange }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Análise de Desempenho Físico
        </CardTitle>
        <CardDescription>
          Posição, velocidade e aceleração durante sprint
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-6">
          <Button
            variant={selectedMetric === 'posicao' ? 'default' : 'secondary'}
            onClick={() => onMetricChange('posicao')}
          >
            Posição
          </Button>
          <Button
            variant={selectedMetric === 'velocidade' ? 'default' : 'secondary'}
            onClick={() => onMetricChange('velocidade')}
          >
            Velocidade
          </Button>
          <Button
            variant={selectedMetric === 'aceleracao' ? 'default' : 'secondary'}
            onClick={() => onMetricChange('aceleracao')}
          >
            Aceleração
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data.funcoes.desempenho_fisico[selectedMetric].dados}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="tempo" 
                  label={{ value: 'Tempo (s)', position: 'insideBottom', offset: -5 }}
                />
                <YAxis 
                  label={{ 
                    value: selectedMetric === 'posicao' ? 'Posição (m)' : 
                           selectedMetric === 'velocidade' ? 'Velocidade (m/s)' : 
                           'Aceleração (m/s²)', 
                    angle: -90, 
                    position: 'insideLeft' 
                  }}
                />
                <Tooltip 
                  formatter={(value) => [
                    value.toFixed(2), 
                    selectedMetric === 'posicao' ? 'Posição (m)' : 
                    selectedMetric === 'velocidade' ? 'Velocidade (m/s)' : 
                    'Aceleração (m/s²)'
                  ]}
                  labelFormatter={(label) => `${label}s`}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey={selectedMetric} 
                  stroke="#82ca9d" 
                  strokeWidth={2}
                  dot={{ fill: '#82ca9d', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Fórmula</h3>
              <code className="bg-gray-100 p-2 rounded block">
                {data.funcoes.desempenho_fisico[selectedMetric].formula}
              </code>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Descrição</h3>
              <p className="text-gray-600">
                {data.funcoes.desempenho_fisico[selectedMetric].descricao}
              </p>
            </div>
            {selectedMetric === 'velocidade' && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Interpretação</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• {data.funcoes.desempenho_fisico.velocidade.interpretacao.v_2s}</li>
                  <li>• {data.funcoes.desempenho_fisico.velocidade.interpretacao.v_6s}</li>
                </ul>
              </div>
            )}
            {selectedMetric === 'aceleracao' && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Interpretação</h3>
                <p className="text-gray-600">
                  {data.funcoes.desempenho_fisico.aceleracao.interpretacao}
                </p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default PerformanceTab

