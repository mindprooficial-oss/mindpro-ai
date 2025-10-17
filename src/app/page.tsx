'use client'

import { useState } from 'react'
import { 
  BarChart3, 
  Package, 
  ShoppingCart, 
  DollarSign, 
  FileText, 
  Settings, 
  Bell, 
  Search,
  TrendingUp,
  TrendingDown,
  Users,
  Eye,
  Download,
  Plus,
  Filter,
  Calendar,
  Star,
  AlertTriangle,
  CheckCircle,
  Clock,
  Zap,
  Target,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  RefreshCw,
  Menu,
  X,
  Link,
  ExternalLink,
  CreditCard,
  Receipt,
  Percent,
  ArrowUpRight,
  ArrowDownRight,
  Calculator,
  Wallet,
  Building,
  Mail,
  Phone,
  MapPin,
  User,
  Shield,
  FileCheck,
  Crown,
  History,
  Edit,
  Save,
  Copy,
  Upload,
  FileImage,
  PenTool,
  Sliders,
  Grid,
  List,
  Image,
  Play,
  Pause,
  RotateCcw,
  Trash2,
  Heart,
  Share2,
  MessageSquare,
  Tag,
  Truck,
  Gift,
  Megaphone,
  BarChart2,
  TrendingUpIcon,
  Newspaper,
  Globe,
  Lightbulb,
  Sparkles,
  Layers,
  MousePointer,
  Shuffle,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Info,
  AlertCircle,
  CheckSquare,
  FileUp
} from 'lucide-react'

export default function MindProAI() {
  const [activeModule, setActiveModule] = useState('dashboard')
  const [darkMode, setDarkMode] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [mlConnected, setMlConnected] = useState(false)
  const [activeSettingsTab, setActiveSettingsTab] = useState('personal')
  const [activeNotificationFilter, setActiveNotificationFilter] = useState('all')
  const [showCustomReport, setShowCustomReport] = useState(false)

  const modules = [
    { id: 'dashboard', name: 'Dashboard', icon: BarChart3 },
    { id: 'products', name: 'Produtos', icon: Package },
    { id: 'ads', name: 'Anúncios', icon: ShoppingCart },
    { id: 'clone', name: 'Clonagem', icon: Copy },
    { id: 'trends', name: 'Tendências ML', icon: TrendingUpIcon },
    { id: 'financial', name: 'Financeiro', icon: DollarSign },
    { id: 'reports', name: 'Relatórios', icon: FileText },
    { id: 'notifications', name: 'Notificações', icon: Bell },
    { id: 'settings', name: 'Configurações', icon: Settings }
  ]

  const kpis = [
    { 
      title: 'Vendas Hoje', 
      value: 'R$ 12.450', 
      change: '+15.2%', 
      trend: 'up',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600'
    },
    { 
      title: 'Produtos Ativos', 
      value: '1.247', 
      change: '+3.1%', 
      trend: 'up',
      icon: Package,
      color: 'from-blue-500 to-cyan-600'
    },
    { 
      title: 'Anúncios', 
      value: '89', 
      change: '-2.4%', 
      trend: 'down',
      icon: ShoppingCart,
      color: 'from-purple-500 to-violet-600'
    },
    { 
      title: 'Reputação ML', 
      value: '4.8★', 
      change: '+0.1', 
      trend: 'up',
      icon: Star,
      color: 'from-yellow-500 to-orange-600'
    }
  ]

  const recentSales = [
    { id: '#ML001', product: 'iPhone 15 Pro Max', value: 'R$ 8.999', status: 'Pago', time: '2min' },
    { id: '#ML002', product: 'Samsung Galaxy S24', value: 'R$ 4.299', status: 'Pendente', time: '15min' },
    { id: '#ML003', product: 'MacBook Air M3', value: 'R$ 12.999', status: 'Pago', time: '1h' },
    { id: '#ML004', product: 'AirPods Pro 2', value: 'R$ 2.199', status: 'Enviado', time: '2h' },
    { id: '#ML005', product: 'iPad Pro 12.9"', value: 'R$ 9.499', status: 'Pago', time: '3h' }
  ]

  const topProducts = [
    { name: 'iPhone 15 Pro Max', sales: 45, revenue: 'R$ 404.955', trend: 'up' },
    { name: 'Samsung Galaxy S24', sales: 32, revenue: 'R$ 137.568', trend: 'up' },
    { name: 'MacBook Air M3', sales: 18, revenue: 'R$ 233.982', trend: 'down' },
    { name: 'AirPods Pro 2', sales: 67, revenue: 'R$ 147.333', trend: 'up' }
  ]

  const handleConnectML = () => {
    setMlConnected(true)
    // Aqui seria implementada a integração real com a API do Mercado Livre
    setTimeout(() => {
      alert('Conta do Mercado Livre conectada com sucesso!')
    }, 1000)
  }

  const renderDashboard = () => (
    <div className="space-y-4 sm:space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon
          return (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${kpi.color}`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className={`flex items-center text-xs sm:text-sm font-medium ${
                  kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {kpi.trend === 'up' ? <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> : <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />}
                  {kpi.change}
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">{kpi.value}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">{kpi.title}</p>
            </div>
          )
        })}
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Sales Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Vendas dos Últimos 7 Dias</h3>
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <RefreshCw className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <Download className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>
          <div className="h-48 sm:h-64 flex items-end justify-between space-x-1 sm:space-x-2">
            {[65, 45, 78, 52, 89, 67, 94].map((height, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-gradient-to-t from-blue-500 to-purple-600 rounded-t-lg transition-all duration-500 hover:from-blue-600 hover:to-purple-700"
                  style={{ height: `${height}%` }}
                ></div>
                <span className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'][index]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">Top Produtos</h3>
          <div className="space-y-3 sm:space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-2 sm:p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 dark:text-white text-xs sm:text-sm truncate">{product.name}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{product.sales} vendas</p>
                </div>
                <div className="text-right ml-2">
                  <p className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">{product.revenue}</p>
                  <div className={`flex items-center justify-end text-xs ${
                    product.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {product.trend === 'up' ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Sales */}
      <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Vendas Recentes</h3>
          <button className="px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 text-xs sm:text-sm font-medium">
            Ver Todas
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-600 dark:text-gray-400 text-xs sm:text-sm">ID</th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Produto</th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Valor</th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Status</th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Tempo</th>
              </tr>
            </thead>
            <tbody>
              {recentSales.map((sale, index) => (
                <tr key={index} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-900 dark:text-white">{sale.id}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-900 dark:text-white">{sale.product}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">{sale.value}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      sale.status === 'Pago' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      sale.status === 'Pendente' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                      'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {sale.status}
                    </span>
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">{sale.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderProducts = () => (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Gestão de Produtos</h2>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
          <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 text-sm font-medium flex items-center justify-center">
            <Plus className="w-4 h-4 mr-2" />
            Novo Produto
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 text-sm font-medium flex items-center justify-center">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Criar Anúncio ML
          </button>
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm font-medium flex items-center justify-center">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Produtos Ativos</h3>
            <Package className="w-5 h-5 text-blue-500" />
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">1.247</p>
          <p className="text-sm text-green-600 mt-1">+12 hoje</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Estoque Baixo</h3>
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">23</p>
          <p className="text-sm text-yellow-600 mt-1">Requer atenção</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Sem Estoque</h3>
            <AlertTriangle className="w-5 h-5 text-red-500" />
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">7</p>
          <p className="text-sm text-red-600 mt-1">Urgente</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Lista de Produtos</h3>
          <div className="flex items-center space-x-3">
            <div className="relative flex-1 sm:flex-none">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Buscar produtos..."
                className="pl-10 pr-4 py-2 w-full sm:w-64 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Produto</th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-600 dark:text-gray-400 text-xs sm:text-sm">SKU</th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Estoque</th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Preço</th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Status</th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Ações</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'iPhone 15 Pro Max', sku: 'IPH15PM-256', stock: 45, price: 'R$ 8.999', status: 'Ativo' },
                { name: 'Samsung Galaxy S24', sku: 'SGS24-128', stock: 12, price: 'R$ 4.299', status: 'Ativo' },
                { name: 'MacBook Air M3', sku: 'MBA-M3-256', stock: 3, price: 'R$ 12.999', status: 'Baixo' },
                { name: 'AirPods Pro 2', sku: 'APP2-WHT', stock: 0, price: 'R$ 2.199', status: 'Esgotado' }
              ].map((product, index) => (
                <tr key={index} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-900 dark:text-white">{product.name}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">{product.sku}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-900 dark:text-white">{product.stock}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">{product.price}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      product.status === 'Ativo' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      product.status === 'Baixo' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                      'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded transition-colors">
                        <Eye className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded transition-colors">
                        <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderAds = () => (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Gestão de Anúncios</h2>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
          <button className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-blue-500 text-white rounded-lg hover:from-yellow-500 hover:to-blue-600 transition-all duration-200 text-sm font-medium flex items-center justify-center">
            <Plus className="w-4 h-4 mr-2" />
            Novo Anúncio
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 text-sm font-medium flex items-center justify-center">
            <Layers className="w-4 h-4 mr-2" />
            Gestão Full
          </button>
        </div>
      </div>

      {/* Filtros estilo Mercado Livre */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">Filtros:</span>
          </div>
          <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm">
            <option>Todos os status</option>
            <option>Ativo</option>
            <option>Pausado</option>
            <option>Finalizado</option>
          </select>
          <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm">
            <option>Todas as categorias</option>
            <option>Eletrônicos</option>
            <option>Casa e Jardim</option>
            <option>Moda</option>
          </select>
          <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm">
            <option>Ordenar por</option>
            <option>Mais vendidos</option>
            <option>Menor preço</option>
            <option>Maior preço</option>
            <option>Mais recentes</option>
          </select>
        </div>
      </div>

      {/* Ferramentas de Gestão */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-400 to-blue-500">
              <Package className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Estoque Full</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Gestão completa de estoque com sincronização automática</p>
          <button className="w-full px-3 py-2 bg-yellow-100 hover:bg-yellow-200 dark:bg-yellow-900/30 dark:hover:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300 rounded-lg text-sm font-medium transition-colors">
            Gerenciar
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-600">
              <Gift className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Promoções</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Central de promoções e ofertas especiais</p>
          <button className="w-full px-3 py-2 bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-900/50 text-red-700 dark:text-red-300 rounded-lg text-sm font-medium transition-colors">
            Criar Promoção
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-violet-600">
              <Megaphone className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Publicidade</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Campanhas de anúncios e marketing no ML</p>
          <button className="w-full px-3 py-2 bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/30 dark:hover:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-medium transition-colors">
            Campanhas
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600">
              <BarChart2 className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Analytics</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Métricas e performance dos anúncios</p>
          <button className="w-full px-3 py-2 bg-green-100 hover:bg-green-200 dark:bg-green-900/30 dark:hover:bg-green-900/50 text-green-700 dark:text-green-300 rounded-lg text-sm font-medium transition-colors">
            Ver Métricas
          </button>
        </div>
      </div>

      {/* Lista de Anúncios */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3 sm:gap-0">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Meus Anúncios</h3>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <Grid className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <List className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              title: 'iPhone 15 Pro Max 256GB', 
              price: 'R$ 8.999', 
              views: '1.2k', 
              favorites: '45', 
              status: 'Ativo',
              image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop'
            },
            { 
              title: 'Samsung Galaxy S24 Ultra', 
              price: 'R$ 4.299', 
              views: '856', 
              favorites: '23', 
              status: 'Pausado',
              image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop'
            },
            { 
              title: 'MacBook Air M3 13"', 
              price: 'R$ 12.999', 
              views: '2.1k', 
              favorites: '78', 
              status: 'Ativo',
              image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=300&fit=crop'
            }
          ].map((ad, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img src={ad.image} alt={ad.title} className="w-full h-48 object-cover" />
                <div className="absolute top-2 right-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    ad.status === 'Ativo' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {ad.status}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">{ad.title}</h4>
                <p className="text-xl font-bold text-gray-900 dark:text-white mb-3">{ad.price}</p>
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{ad.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>{ad.favorites}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="flex-1 px-3 py-2 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium transition-colors">
                    Editar
                  </button>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <Share2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <BarChart2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderClone = () => (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Clonagem de Anúncios</h2>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
          <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-lg hover:from-purple-600 hover:to-violet-700 transition-all duration-200 text-sm font-medium flex items-center justify-center">
            <Copy className="w-4 h-4 mr-2" />
            Clonar Anúncio
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 text-sm font-medium flex items-center justify-center">
            <Package className="w-4 h-4 mr-2" />
            Converter em Produto
          </button>
        </div>
      </div>

      {/* Busca de Anúncios para Clonar */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Buscar Anúncios para Clonar</h3>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <input 
                type="text" 
                placeholder="Cole a URL do anúncio do Mercado Livre ou busque por palavra-chave..."
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-lg hover:from-purple-600 hover:to-violet-700 transition-all duration-200 font-medium">
              Buscar
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Sugestões:</span>
            {['iPhone 15', 'Samsung Galaxy', 'MacBook', 'AirPods'].map((suggestion, index) => (
              <button key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Anúncios Clonados */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3 sm:gap-0">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Anúncios Clonados</h3>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm">
              Todos
            </button>
            <button className="px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm">
              Pendentes
            </button>
            <button className="px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm">
              Convertidos
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {[
            {
              title: 'iPhone 15 Pro Max 256GB Titânio Natural',
              originalUrl: 'MLB123456789',
              status: 'Clonado',
              date: '2024-11-17',
              converted: false
            },
            {
              title: 'Samsung Galaxy S24 Ultra 512GB Preto',
              originalUrl: 'MLB987654321',
              status: 'Convertido',
              date: '2024-11-16',
              converted: true
            },
            {
              title: 'MacBook Air M3 13" 256GB Prata',
              originalUrl: 'MLB456789123',
              status: 'Pendente',
              date: '2024-11-15',
              converted: false
            }
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">{item.title}</h4>
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>ID Original: {item.originalUrl}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  item.status === 'Convertido' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                  item.status === 'Clonado' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                  'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                }`}>
                  {item.status}
                </span>
                {!item.converted && (
                  <button className="px-3 py-1 bg-green-100 hover:bg-green-200 dark:bg-green-900/30 dark:hover:bg-green-900/50 text-green-700 dark:text-green-300 rounded-lg text-sm font-medium transition-colors">
                    Converter
                  </button>
                )}
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors">
                  <Eye className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderTrends = () => (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Tendências do Mercado Livre</h2>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-blue-500 text-white rounded-lg hover:from-yellow-500 hover:to-blue-600 transition-all duration-200 text-sm font-medium flex items-center">
            <RefreshCw className="w-4 h-4 mr-2" />
            Atualizar
          </button>
        </div>
      </div>

      {/* Categorias em Alta */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
          Categorias em Alta
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { category: 'Eletrônicos', growth: '+25%', products: '1.2M', color: 'from-blue-500 to-cyan-600' },
            { category: 'Casa e Jardim', growth: '+18%', products: '890K', color: 'from-green-500 to-emerald-600' },
            { category: 'Moda', growth: '+15%', products: '2.1M', color: 'from-purple-500 to-violet-600' },
            { category: 'Esportes', growth: '+12%', products: '650K', color: 'from-orange-500 to-red-600' },
            { category: 'Beleza', growth: '+10%', products: '780K', color: 'from-pink-500 to-rose-600' },
            { category: 'Livros', growth: '+8%', products: '320K', color: 'from-indigo-500 to-blue-600' }
          ].map((item, index) => (
            <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">{item.category}</h4>
                <span className="text-green-600 font-medium text-sm">{item.growth}</span>
              </div>
              <div className={`h-2 bg-gradient-to-r ${item.color} rounded-full mb-2`}></div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.products} produtos</p>
            </div>
          ))}
        </div>
      </div>

      {/* Produtos Mais Vendidos */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
          <Star className="w-5 h-5 mr-2 text-yellow-500" />
          Produtos Mais Vendidos
        </h3>
        <div className="space-y-4">
          {[
            { rank: 1, name: 'iPhone 15 Pro Max', sales: '15.2K', price: 'R$ 8.999', change: '+5%' },
            { rank: 2, name: 'Samsung Galaxy S24', sales: '12.8K', price: 'R$ 4.299', change: '+3%' },
            { rank: 3, name: 'AirPods Pro 2', sales: '11.5K', price: 'R$ 2.199', change: '+8%' },
            { rank: 4, name: 'MacBook Air M3', sales: '9.2K', price: 'R$ 12.999', change: '+2%' },
            { rank: 5, name: 'iPad Pro 12.9"', sales: '8.7K', price: 'R$ 9.499', change: '+4%' }
          ].map((product, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-center space-x-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                  product.rank === 1 ? 'bg-yellow-500' :
                  product.rank === 2 ? 'bg-gray-400' :
                  product.rank === 3 ? 'bg-orange-500' :
                  'bg-blue-500'
                }`}>
                  {product.rank}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">{product.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{product.sales} vendas</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900 dark:text-white">{product.price}</p>
                <p className="text-sm text-green-600">{product.change}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notícias e Atualizações */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
          <Newspaper className="w-5 h-5 mr-2 text-blue-500" />
          Notícias e Atualizações ML
        </h3>
        <div className="space-y-4">
          {[
            {
              title: 'Nova política de frete grátis para vendedores Premium',
              date: '2024-11-17',
              type: 'Política',
              urgent: true
            },
            {
              title: 'Atualização no algoritmo de busca - Melhor rankeamento',
              date: '2024-11-16',
              type: 'Algoritmo',
              urgent: false
            },
            {
              title: 'Black Friday 2024: Prepare seus anúncios',
              date: '2024-11-15',
              type: 'Evento',
              urgent: true
            },
            {
              title: 'Novas categorias disponíveis para produtos sustentáveis',
              date: '2024-11-14',
              type: 'Categoria',
              urgent: false
            }
          ].map((news, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className={`p-2 rounded-lg ${
                news.urgent ? 'bg-red-100 dark:bg-red-900/30' : 'bg-blue-100 dark:bg-blue-900/30'
              }`}>
                {news.urgent ? (
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                ) : (
                  <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                )}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">{news.title}</h4>
                <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
                  <span>{news.date}</span>
                  <span>•</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    news.type === 'Política' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' :
                    news.type === 'Algoritmo' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                    news.type === 'Evento' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' :
                    'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                  }`}>
                    {news.type}
                  </span>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors">
                <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderNotifications = () => {
    const notificationFilters = [
      { id: 'all', name: 'Todas', count: 24 },
      { id: 'sales', name: 'Vendas', count: 8 },
      { id: 'ads', name: 'Anúncios', count: 5 },
      { id: 'billing', name: 'Cobrança', count: 3 },
      { id: 'issues', name: 'Problemas', count: 4 },
      { id: 'mindpro', name: 'MINDPRO.AI', count: 4 }
    ]

    const notifications = [
      {
        id: 1,
        type: 'sales',
        title: 'Nova venda realizada',
        message: 'iPhone 15 Pro Max vendido por R$ 8.999',
        time: '2 min atrás',
        read: false,
        urgent: false
      },
      {
        id: 2,
        type: 'issues',
        title: 'Anúncio denunciado',
        message: 'Seu anúncio "MacBook Air M3" recebeu uma denúncia por propriedade intelectual',
        time: '15 min atrás',
        read: false,
        urgent: true
      },
      {
        id: 3,
        type: 'mindpro',
        title: 'Nova funcionalidade disponível',
        message: 'Agora você pode clonar anúncios diretamente do Mercado Livre',
        time: '1 hora atrás',
        read: false,
        urgent: false
      },
      {
        id: 4,
        type: 'billing',
        title: 'Cobrança processada',
        message: 'Sua mensalidade do plano Business foi processada com sucesso',
        time: '2 horas atrás',
        read: true,
        urgent: false
      },
      {
        id: 5,
        type: 'ads',
        title: 'Anúncio pausado automaticamente',
        message: 'Samsung Galaxy S24 foi pausado por falta de estoque',
        time: '3 horas atrás',
        read: true,
        urgent: false
      }
    ]

    const filteredNotifications = activeNotificationFilter === 'all' 
      ? notifications 
      : notifications.filter(n => n.type === activeNotificationFilter)

    return (
      <div className="space-y-4 sm:space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Central de Notificações</h2>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm font-medium">
              Marcar todas como lidas
            </button>
          </div>
        </div>

        {/* Filtros */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex flex-wrap gap-2">
            {notificationFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveNotificationFilter(filter.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 ${
                  activeNotificationFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <span>{filter.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  activeNotificationFilter === filter.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400'
                }`}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Lista de Notificações */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 sm:p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                  !notification.read ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-2 rounded-lg ${
                    notification.type === 'sales' ? 'bg-green-100 dark:bg-green-900/30' :
                    notification.type === 'issues' ? 'bg-red-100 dark:bg-red-900/30' :
                    notification.type === 'mindpro' ? 'bg-purple-100 dark:bg-purple-900/30' :
                    notification.type === 'billing' ? 'bg-blue-100 dark:bg-blue-900/30' :
                    'bg-yellow-100 dark:bg-yellow-900/30'
                  }`}>
                    {notification.type === 'sales' && <DollarSign className="w-5 h-5 text-green-600 dark:text-green-400" />}
                    {notification.type === 'issues' && <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />}
                    {notification.type === 'mindpro' && <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />}
                    {notification.type === 'billing' && <CreditCard className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                    {notification.type === 'ads' && <ShoppingCart className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className={`font-medium ${
                          !notification.read ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'
                        }`}>
                          {notification.title}
                          {notification.urgent && (
                            <span className="ml-2 px-2 py-1 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 rounded-full text-xs font-medium">
                              Urgente
                            </span>
                          )}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{notification.message}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">{notification.time}</p>
                      </div>
                      
                      <div className="flex items-center space-x-2 ml-4">
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        )}
                        <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded transition-colors">
                          <X className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const renderFinancial = () => (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Controle Financeiro</h2>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
          <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 text-sm font-medium flex items-center justify-center">
            <Download className="w-4 h-4 mr-2" />
            Exportar DRE
          </button>
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm font-medium flex items-center justify-center">
            <Calendar className="w-4 h-4 mr-2" />
            Período
          </button>
        </div>
      </div>

      {/* KPIs Financeiros */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-green-500 to-emerald-600">
              <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="flex items-center text-xs sm:text-sm font-medium text-green-600">
              <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              +18.5%
            </div>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">R$ 89.450</h3>
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Faturamento Bruto</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600">
              <Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="flex items-center text-xs sm:text-sm font-medium text-green-600">
              <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              +12.3%
            </div>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">R$ 67.890</h3>
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Lucro Líquido</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-red-500 to-pink-600">
              <Receipt className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="flex items-center text-xs sm:text-sm font-medium text-red-600">
              <ArrowDownRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              -5.2%
            </div>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">R$ 21.560</h3>
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Custos Totais</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-purple-500 to-violet-600">
              <Percent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="flex items-center text-xs sm:text-sm font-medium text-green-600">
              <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              +2.1%
            </div>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">75.9%</h3>
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Margem de Lucro</p>
        </div>
      </div>

      {/* Gráficos Financeiros */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Fluxo de Caixa */}
        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Fluxo de Caixa</h3>
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <RefreshCw className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <Download className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>
          <div className="h-48 sm:h-64 flex items-end justify-between space-x-1 sm:space-x-2">
            {[85, 65, 78, 92, 89, 67, 94].map((height, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-gradient-to-t from-green-500 to-emerald-600 rounded-t-lg transition-all duration-500 hover:from-green-600 hover:to-emerald-700"
                  style={{ height: `${height}%` }}
                ></div>
                <span className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'][index]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Distribuição de Custos */}
        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">Distribuição de Custos</h3>
          <div className="space-y-4">
            {[
              { label: 'Taxa ML', value: '12.5%', amount: 'R$ 11.180', color: 'bg-yellow-500' },
              { label: 'Frete', value: '8.3%', amount: 'R$ 7.424', color: 'bg-blue-500' },
              { label: 'Impostos', value: '6.2%', amount: 'R$ 5.546', color: 'bg-red-500' },
              { label: 'Outros', value: '3.1%', amount: 'R$ 2.774', color: 'bg-purple-500' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                  <span className="text-sm text-gray-900 dark:text-white font-medium">{item.label}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{item.amount}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Calculadora de Preços Estilo AvantPro */}
      <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white flex items-center">
            <Calculator className="w-5 h-5 mr-2" />
            Calculadora de Preços - Estilo AvantPro
          </h3>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-2 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium transition-colors">
              Salvar Template
            </button>
            <button className="px-3 py-2 bg-green-100 hover:bg-green-200 dark:bg-green-900/30 dark:hover:bg-green-900/50 text-green-700 dark:text-green-300 rounded-lg text-sm font-medium transition-colors">
              Histórico
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Dados do Produto */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-white text-sm border-b border-gray-200 dark:border-gray-700 pb-2">DADOS DO PRODUTO</h4>
            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Custo do Produto</label>
              <input type="number" placeholder="R$ 0,00" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Peso (kg)</label>
              <input type="number" placeholder="0.5" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Categoria ML</label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Eletrônicos</option>
                <option>Casa e Jardim</option>
                <option>Moda</option>
              </select>
            </div>
          </div>

          {/* Configurações */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-white text-sm border-b border-gray-200 dark:border-gray-700 pb-2">CONFIGURAÇÕES</h4>
            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Margem Desejada (%)</label>
              <input type="number" placeholder="30" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Tipo de Frete</label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Frete Grátis</option>
                <option>Frete Pago</option>
                <option>Retirada</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Modalidade</label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Clássico</option>
                <option>Premium</option>
                <option>Full</option>
              </select>
            </div>
          </div>

          {/* Custos Calculados */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-white text-sm border-b border-gray-200 dark:border-gray-700 pb-2">CUSTOS CALCULADOS</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <span className="text-xs text-gray-600 dark:text-gray-400">Taxa ML</span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">R$ 48,00</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <span className="text-xs text-gray-600 dark:text-gray-400">Frete Médio</span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">R$ 15,00</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <span className="text-xs text-gray-600 dark:text-gray-400">Impostos</span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">R$ 24,00</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200 dark:border-yellow-800">
                <span className="text-xs text-yellow-700 dark:text-yellow-400 font-medium">Custo Total</span>
                <span className="text-sm font-bold text-yellow-900 dark:text-yellow-300">R$ 287,00</span>
              </div>
            </div>
          </div>

          {/* Resultado Final */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-white text-sm border-b border-gray-200 dark:border-gray-700 pb-2">RESULTADO</h4>
            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
              <div className="text-center">
                <p className="text-xs text-green-700 dark:text-green-400 mb-1">PREÇO SUGERIDO</p>
                <p className="text-2xl font-bold text-green-900 dark:text-green-300 mb-2">R$ 399,00</p>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-green-600 dark:text-green-400">Lucro:</span>
                    <span className="font-semibold text-green-700 dark:text-green-300">R$ 112,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-600 dark:text-green-400">Margem:</span>
                    <span className="font-semibold text-green-700 dark:text-green-300">28%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-medium text-sm">
                Aplicar Preço
              </button>
              <button className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium text-sm">
                Comparar Concorrência
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderReports = () => (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Relatórios Automáticos</h2>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
          <button 
            onClick={() => setShowCustomReport(!showCustomReport)}
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-lg hover:from-purple-600 hover:to-violet-700 transition-all duration-200 text-sm font-medium flex items-center justify-center"
          >
            <Sliders className="w-4 h-4 mr-2" />
            Relatório Personalizado
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 text-sm font-medium flex items-center justify-center">
            <Plus className="w-4 h-4 mr-2" />
            Novo Relatório
          </button>
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm font-medium flex items-center justify-center">
            <Calendar className="w-4 h-4 mr-2" />
            Agendar
          </button>
        </div>
      </div>

      {/* Relatório Personalizado */}
      {showCustomReport && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <Sliders className="w-5 h-5 mr-2 text-purple-500" />
            Criar Relatório Personalizado
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Seleção de Dados */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Dados para Incluir</h4>
              <div className="space-y-2">
                {[
                  'Vendas por período',
                  'Produtos mais vendidos',
                  'Análise de margem',
                  'Performance de anúncios',
                  'Custos operacionais',
                  'Fluxo de caixa',
                  'Comparativo mensal',
                  'Métricas do ML'
                ].map((option, index) => (
                  <label key={index} className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600 text-purple-600 focus:ring-purple-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filtros */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Filtros</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Período</label>
                  <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm">
                    <option>Últimos 30 dias</option>
                    <option>Últimos 90 dias</option>
                    <option>Este ano</option>
                    <option>Personalizado</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Categorias</label>
                  <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm">
                    <option>Todas as categorias</option>
                    <option>Eletrônicos</option>
                    <option>Casa e Jardim</option>
                    <option>Moda</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Status</label>
                  <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm">
                    <option>Todos os status</option>
                    <option>Ativos</option>
                    <option>Pausados</option>
                    <option>Finalizados</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Formato de Saída */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Formato de Saída</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Tipo de Arquivo</label>
                  <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm">
                    <option>PDF</option>
                    <option>Excel</option>
                    <option>CSV</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Layout</label>
                  <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm">
                    <option>Executivo</option>
                    <option>Detalhado</option>
                    <option>Gráficos</option>
                  </select>
                </div>
                <div className="pt-4">
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-lg hover:from-purple-600 hover:to-violet-700 transition-all duration-200 font-medium">
                    Gerar Relatório
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tipos de Relatórios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded-full font-medium">Disponível</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Relatório de Vendas</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Análise completa de vendas, produtos mais vendidos e performance por período</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 dark:text-gray-400">Última atualização: hoje</span>
            <button className="px-3 py-1 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-medium transition-colors">
              Gerar
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded-full font-medium">Disponível</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">DRE Completo</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Demonstrativo de Resultado do Exercício com receitas, custos e lucros detalhados</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 dark:text-gray-400">Última atualização: hoje</span>
            <button className="px-3 py-1 bg-green-100 hover:bg-green-200 dark:bg-green-900 dark:hover:bg-green-800 text-green-700 dark:text-green-300 rounded-lg text-xs font-medium transition-colors">
              Gerar
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-violet-600">
              <Package className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded-full font-medium">Disponível</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Controle de Estoque</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Relatório de produtos, níveis de estoque, alertas e necessidade de reposição</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 dark:text-gray-400">Última atualização: 2h atrás</span>
            <button className="px-3 py-1 bg-purple-100 hover:bg-purple-200 dark:bg-purple-900 dark:hover:bg-purple-800 text-purple-700 dark:text-purple-300 rounded-lg text-xs font-medium transition-colors">
              Gerar
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-600">
              <Star className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded-full font-medium">Disponível</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Performance ML</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Métricas do Mercado Livre: reputação, qualidade, tempo de resposta e avaliações</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 dark:text-gray-400">Última atualização: 1h atrás</span>
            <button className="px-3 py-1 bg-yellow-100 hover:bg-yellow-200 dark:bg-yellow-900 dark:hover:bg-yellow-800 text-yellow-700 dark:text-yellow-300 rounded-lg text-xs font-medium transition-colors">
              Gerar
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-600">
              <Target className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded-full font-medium">Disponível</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Análise de Concorrência</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Comparativo de preços, posicionamento e oportunidades de mercado</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 dark:text-gray-400">Última atualização: 4h atrás</span>
            <button className="px-3 py-1 bg-red-100 hover:bg-red-200 dark:bg-red-900 dark:hover:bg-red-800 text-red-700 dark:text-red-300 rounded-lg text-xs font-medium transition-colors">
              Gerar
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full font-medium">Premium</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Relatório IA Insights</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Análises preditivas, tendências de mercado e recomendações inteligentes</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 dark:text-gray-400">Requer upgrade</span>
            <button className="px-3 py-1 bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900 dark:hover:bg-indigo-800 text-indigo-700 dark:text-indigo-300 rounded-lg text-xs font-medium transition-colors">
              Upgrade
            </button>
          </div>
        </div>
      </div>

      {/* Relatórios Agendados */}
      <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Relatórios Agendados</h3>
          <button className="px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 text-xs sm:text-sm font-medium">
            Configurar Agendamento
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Relatório</th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Frequência</th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Próximo Envio</th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Status</th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Ações</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'DRE Mensal', frequency: 'Mensal', next: '01/12/2024', status: 'Ativo' },
                { name: 'Vendas Semanais', frequency: 'Semanal', next: '25/11/2024', status: 'Ativo' },
                { name: 'Estoque Diário', frequency: 'Diário', next: '18/11/2024', status: 'Pausado' }
              ].map((report, index) => (
                <tr key={index} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-900 dark:text-white">{report.name}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">{report.frequency}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-900 dark:text-white">{report.next}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      report.status === 'Ativo' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded transition-colors">
                        <Edit className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded transition-colors">
                        <Download className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Exportação */}
      <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">Exportação Rápida</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors text-center">
            <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-900 dark:text-white">PDF</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Relatório formatado</p>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-green-500 dark:hover:border-green-400 transition-colors text-center">
            <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-900 dark:text-white">Excel</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Planilha editável</p>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-purple-500 dark:hover:border-purple-400 transition-colors text-center">
            <ExternalLink className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-900 dark:text-white">Google Drive</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Salvar na nuvem</p>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-yellow-500 dark:hover:border-yellow-400 transition-colors text-center">
            <Mail className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-900 dark:text-white">E-mail</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Enviar por email</p>
          </button>
        </div>
      </div>
    </div>
  )

  const renderSettings = () => {
    const settingsTabs = [
      { id: 'personal', name: 'Informações Pessoais', icon: User },
      { id: 'contact', name: 'Contato', icon: Mail },
      { id: 'policies', name: 'Políticas e Normas', icon: Shield },
      { id: 'signature', name: 'Assinatura', icon: PenTool },
      { id: 'billing', name: 'Pagamentos e Faturas', icon: CreditCard }
    ]

    return (
      <div className="space-y-4 sm:space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Configurações</h2>
        
        {/* Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8 px-6 overflow-x-auto">
              {settingsTabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSettingsTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                      activeSettingsTab === tab.id
                        ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                        : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.name}</span>
                  </button>
                )
              })}
            </nav>
          </div>

          <div className="p-6">
            {activeSettingsTab === 'personal' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Informações Pessoais</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nome Completo</label>
                    <input type="text" placeholder="Seu nome completo" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">CPF/CNPJ</label>
                    <input type="text" placeholder="000.000.000-00" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Data de Nascimento</label>
                    <input type="date" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Profissão</label>
                    <input type="text" placeholder="Sua profissão" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                </div>
                
                {/* Seção de Documentos */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-4">Anexo de Documentos</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">RG (Documento de Identidade)</label>
                      <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 text-center hover:border-blue-500 dark:hover:border-blue-400 transition-colors cursor-pointer">
                        <FileUp className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 dark:text-gray-400">Clique para fazer upload do RG</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">PDF, JPG ou PNG até 5MB</p>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Comprovação de Renda</label>
                      <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 text-center hover:border-blue-500 dark:hover:border-blue-400 transition-colors cursor-pointer">
                        <FileUp className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 dark:text-gray-400">Clique para fazer upload</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Holerite, Declaração IR, etc.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-medium flex items-center">
                    <Save className="w-4 h-4 mr-2" />
                    Salvar Alterações
                  </button>
                </div>
              </div>
            )}

            {activeSettingsTab === 'contact' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Informações de Contato</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">E-mail Principal</label>
                    <input type="email" placeholder="seu@email.com" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Telefone</label>
                    <input type="tel" placeholder="(11) 99999-9999" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Endereço Completo</label>
                    <textarea placeholder="Rua, número, bairro, cidade, estado, CEP" rows={3} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-medium flex items-center">
                    <Save className="w-4 h-4 mr-2" />
                    Salvar Alterações
                  </button>
                </div>
              </div>
            )}

            {activeSettingsTab === 'policies' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Políticas e Normas da MINDPRO.AI</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Termos de Uso</h4>
                    <p className="text-sm text-blue-800 dark:text-blue-400 mb-3">
                      Ao utilizar o MINDPRO.AI, você concorda com nossos termos de uso e políticas de privacidade. 
                      Nossa plataforma é projetada para otimizar sua gestão no Mercado Livre de forma segura e eficiente.
                    </p>
                    <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline flex items-center">
                      <FileCheck className="w-4 h-4 mr-1" />
                      Ler Termos Completos
                    </button>
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2">Política de Privacidade</h4>
                    <p className="text-sm text-green-800 dark:text-green-400 mb-3">
                      Seus dados são protegidos com criptografia de ponta e nunca são compartilhados com terceiros. 
                      Utilizamos apenas as informações necessárias para fornecer nossos serviços.
                    </p>
                    <button className="text-green-600 dark:text-green-400 text-sm font-medium hover:underline flex items-center">
                      <Shield className="w-4 h-4 mr-1" />
                      Ver Política Completa
                    </button>
                  </div>

                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">Código de Conduta</h4>
                    <p className="text-sm text-purple-800 dark:text-purple-400 mb-3">
                      Promovemos um ambiente respeitoso e profissional. Nosso suporte está disponível para 
                      esclarecer dúvidas e garantir a melhor experiência possível.
                    </p>
                    <button className="text-purple-600 dark:text-purple-400 text-sm font-medium hover:underline flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      Conhecer Diretrizes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeSettingsTab === 'signature' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Assinatura Digital</h3>
                
                <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg">
                      <PenTool className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Contrato de Uso MINDPRO.AI</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Gerado automaticamente por IA baseado nos seus dados</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">Status do Contrato</span>
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full text-xs font-medium">
                          Aguardando Verificação
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        Seu contrato personalizado foi gerado com base nas informações da sua conta. 
                        Está sendo analisado pela equipe MINDPRO.AI para aprovação.
                      </p>
                      <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>Gerado em: 17/11/2024 às 14:30</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Dados Inclusos</h5>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li className="flex items-center"><CheckSquare className="w-4 h-4 text-green-500 mr-2" />Informações pessoais</li>
                          <li className="flex items-center"><CheckSquare className="w-4 h-4 text-green-500 mr-2" />Dados de contato</li>
                          <li className="flex items-center"><CheckSquare className="w-4 h-4 text-green-500 mr-2" />Plano de assinatura</li>
                          <li className="flex items-center"><CheckSquare className="w-4 h-4 text-green-500 mr-2" />Termos específicos</li>
                        </ul>
                      </div>
                      
                      <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Próximos Passos</h5>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center text-yellow-600 dark:text-yellow-400">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>Verificação da empresa (1-2 dias)</span>
                          </div>
                          <div className="flex items-center text-gray-400">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            <span>Disponibilização para assinatura</span>
                          </div>
                          <div className="flex items-center text-gray-400">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            <span>Ativação completa da conta</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <button disabled className="px-6 py-3 bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 rounded-lg font-medium cursor-not-allowed">
                        Aguardando Aprovação para Assinatura
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSettingsTab === 'billing' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Pagamentos e Faturas</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Método de Pagamento</h4>
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <CreditCard className="w-8 h-8 text-blue-500" />
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">**** **** **** 1234</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Visa • Expira 12/26</p>
                          </div>
                        </div>
                        <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
                          Alterar
                        </button>
                      </div>
                      <button className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium">
                        Adicionar Novo Cartão
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Próxima Cobrança</h4>
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-blue-800 dark:text-blue-400">Plano Business</span>
                        <span className="font-semibold text-blue-900 dark:text-blue-300">R$ 149,90</span>
                      </div>
                      <p className="text-sm text-blue-700 dark:text-blue-400">Cobrança em 17/12/2024</p>
                    </div>
                  </div>
                </div>

                {/* Seção de Comprovante de Pagamento */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Comprovante de Pagamento</h4>
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800 mb-4">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-yellow-800 dark:text-yellow-300">Envio de Comprovante</p>
                        <p className="text-sm text-yellow-700 dark:text-yellow-400">
                          Para maior segurança da empresa e do cliente, é necessário enviar o comprovante de pagamento após cada cobrança.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-blue-500 dark:hover:border-blue-400 transition-colors cursor-pointer">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Enviar Comprovante de Pagamento</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">PDF, JPG ou PNG até 10MB</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Histórico de Faturas</h4>
                    <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
                      Ver Todas
                    </button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400 text-sm">Data</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400 text-sm">Descrição</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400 text-sm">Valor</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400 text-sm">Status</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400 text-sm">Comprovante</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400 text-sm">Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { date: '17/11/2024', description: 'Plano Business - Novembro', amount: 'R$ 149,90', status: 'Pago', receipt: 'Enviado' },
                          { date: '17/10/2024', description: 'Plano Business - Outubro', amount: 'R$ 149,90', status: 'Pago', receipt: 'Enviado' },
                          { date: '17/09/2024', description: 'Plano Business - Setembro', amount: 'R$ 149,90', status: 'Pago', receipt: 'Pendente' }
                        ].map((invoice, index) => (
                          <tr key={index} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            <td className="py-3 px-4 text-sm text-gray-900 dark:text-white">{invoice.date}</td>
                            <td className="py-3 px-4 text-sm text-gray-900 dark:text-white">{invoice.description}</td>
                            <td className="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">{invoice.amount}</td>
                            <td className="py-3 px-4">
                              <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-xs font-medium">
                                {invoice.status}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                invoice.receipt === 'Enviado' 
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                              }`}>
                                {invoice.receipt}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded transition-colors">
                                <Download className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  const renderModule = () => {
    switch (activeModule) {
      case 'dashboard':
        return renderDashboard()
      case 'products':
        return renderProducts()
      case 'ads':
        return renderAds()
      case 'clone':
        return renderClone()
      case 'trends':
        return renderTrends()
      case 'financial':
        return renderFinancial()
      case 'reports':
        return renderReports()
      case 'notifications':
        return renderNotifications()
      case 'settings':
        return renderSettings()
      default:
        return renderDashboard()
    }
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 sm:space-x-4">
                {/* Mobile menu button */}
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
                
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/5df4a59e-714e-4004-bdfb-99d1759fac61.jpg" 
                  alt="MINDPRO.AI Logo" 
                  className="h-8 sm:h-10 w-auto bg-transparent"
                  style={{ backgroundColor: 'transparent' }}
                />
                <div className="hidden sm:block">
                  <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    MINDPRO.AI
                  </h1>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Revolucionando o E-commerce Inteligente</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-4">
                <div className="relative hidden sm:block">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Buscar..."
                    className="pl-10 pr-4 py-2 w-48 sm:w-64 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors relative">
                  <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>
                
                <button 
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  {darkMode ? '🌞' : '🌙'}
                </button>
                
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">U</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="flex">
          {/* Sidebar */}
          <aside className={`${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-sm border-r border-gray-200 dark:border-gray-700 transition-transform duration-300 ease-in-out lg:transition-none`}>
            <nav className="p-4 sm:p-6 h-full overflow-y-auto">
              {/* Mercado Livre Connection */}
              <div className="mb-6 p-4 bg-gradient-to-r from-yellow-50 to-blue-50 dark:from-yellow-900/20 dark:to-blue-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded flex items-center justify-center">
                    <span className="text-xs font-bold text-blue-900">ML</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Mercado Livre</span>
                </div>
                
                {mlConnected ? (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-xs text-green-700 dark:text-green-400 font-medium">Conectado</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Conta: vendedor@exemplo.com
                    </p>
                    <button 
                      onClick={() => setMlConnected(false)}
                      className="w-full px-3 py-2 bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-900/50 text-red-700 dark:text-red-400 rounded-lg text-xs font-medium transition-colors flex items-center justify-center"
                    >
                      <X className="w-3 h-3 mr-1" />
                      Desconectar
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Conecte sua conta para sincronizar dados
                    </p>
                    <button 
                      onClick={handleConnectML}
                      className="w-full px-3 py-2 bg-gradient-to-r from-yellow-400 to-blue-500 hover:from-yellow-500 hover:to-blue-600 text-white rounded-lg text-xs font-medium transition-all duration-200 flex items-center justify-center"
                    >
                      <Link className="w-3 h-3 mr-1" />
                      Conectar Conta
                    </button>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                {modules.map((module) => {
                  const Icon = module.icon
                  return (
                    <button
                      key={module.id}
                      onClick={() => {
                        setActiveModule(module.id)
                        setSidebarOpen(false) // Close mobile menu when selecting
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                        activeModule === module.id
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{module.name}</span>
                    </button>
                  )
                })}
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Plano Business</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                  IA ativada • Relatórios ilimitados
                </p>
                <button className="w-full px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-xs font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
                  Upgrade para Premium
                </button>
              </div>
            </nav>
          </aside>

          {/* Mobile overlay */}
          {sidebarOpen && (
            <div 
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setSidebarOpen(false)}
            ></div>
          )}

          {/* Main Content */}
          <main className="flex-1 p-4 sm:p-6 lg:ml-0">
            {renderModule()}
          </main>
        </div>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4 px-6">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2025, MIND PRO LTDA. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}