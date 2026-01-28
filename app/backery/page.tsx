"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Store,
    ShoppingBag,
    ChefHat,
    Package,
    LayoutDashboard,
    Bell,
    Search,
    Plus,
    CreditCard,
    Smartphone,
    Banknote,
    QrCode,
    Loader2,
    CheckCircle2,
    TrendingUp,
    Users,
    Clock,
    AlertTriangle,
    RefreshCw,
    MoreVertical,
    ArrowRight,
    Menu,
    X,
    Wallet,
    Bike
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useLanguage } from '@/context/LanguageContext';

// --- Utils ---
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// --- Static Color Map for Tailwind JIT Compatibility ---
const COLOR_VARIANTS = {
    'bg-green-500': {
        bg: 'bg-green-900/20',
        text: 'text-green-400',
        icon: 'text-green-500',
    },
    'bg-orange-500': {
        bg: 'bg-orange-900/20',
        text: 'text-orange-400',
        icon: 'text-orange-500',
    },
    'bg-blue-500': {
        bg: 'bg-blue-900/20',
        text: 'text-blue-400',
        icon: 'text-blue-500',
    },
    'bg-red-500': {
        bg: 'bg-red-900/20',
        text: 'text-red-400',
        icon: 'text-red-500',
    },
} as const;

// --- Dictionary ---
const BAKERY_DICT = {
    en: {
        sidebar: {
            dashboard: "Dashboard",
            pos: "Point of Sale",
            kds: "Kitchen (KDS)",
            inventory: "Inventory",
            systemStatus: "SYSTEM STATUS",
            operational: "All Systems Operational",
            manager: "Manager",
            connected: "PagBank Connected"
        },
        topbar: {
            search: "Search orders, products...",
            newOrder: "New Order",
        },
        dashboard: {
            title: "Dashboard Overview",
            subtitle: "Welcome back, here's what's happening at your bakery today.",
            stats: {
                revenue: "Total Revenue",
                orders: "Active Orders",
                avgTicket: "Avg. Ticket",
                secure: "Processed securely by PagBank",
                trendUp: "+12.5% vs yesterday",
                trendDown: "-2.1% vs yesterday",
            },
            charts: {
                title: "Hourly Sales",
                today: "Today",
            },
            activity: {
                title: "Live Activity",
                justNow: "Just now",
            }
        },
        pos: {
            categories: {
                all: "All",
                bread: "Bread",
                sweet: "Sweet",
                drink: "Drink"
            },
            cart: {
                title: "Current Order",
                items: "items",
                empty: "Your cart is empty",
                subtotal: "Subtotal",
                tax: "Tax (10%)",
                total: "Total",
                checkout: "Checkout",
                poweredBy: "Powered by PagBank"
            },
            product: {
                add: "Add to Order"
            }
        },
        kds: {
            title: "Kitchen Display System",
            columns: {
                pending: "Pending",
                preparing: "Preparing",
                ready: "Ready to Serve",
                delivery: "Driver Assigned"
            },
            move: "Move"
        },
        inventory: {
            title: "Inventory Management",
            subtitle: "Track ingredients and automate supplier orders.",
            refresh: "Refresh Data",
            table: {
                ingredient: "Ingredient",
                status: "Status",
                level: "Stock Level",
                actions: "Actions",
                reorder: "Reorder"
            }
        },
        checkout: {
            title: "Complete Payment",
            totalAmount: "Total Amount",
            methods: {
                credit: "Credit Card",
                debit: "Debit Card",
                pix: "PIX",
                cash: "Cash"
            },
            processing: {
                title: "Connecting to Terminal...",
                subtitle: "Please tap the card on the machine"
            },
            success: {
                title: "Transaction Approved!",
                subtitle: "Receipt has been printed and emailed.",
                totalPaid: "Total Paid",
                txId: "Transaction ID"
            }
        },
        toasts: {
            orderSuccess: "Order completed successfully!",
            itemAdded: "Item added to cart",
            refreshing: "Refreshing inventory data...",
            lowStock: "Low stock alert: {item}"
        }
    },
    pt: {
        sidebar: {
            dashboard: "Visão Geral",
            pos: "Ponto de Venda",
            kds: "Cozinha (KDS)",
            inventory: "Estoque",
            systemStatus: "STATUS DO SISTEMA",
            operational: "Sistemas Operacionais",
            manager: "Gerente",
            connected: "PagBank Conectado"
        },
        topbar: {
            search: "Buscar pedidos, produtos...",
            newOrder: "Novo Pedido",
        },
        dashboard: {
            title: "Visão Geral",
            subtitle: "Bem-vindo de volta, veja o que está acontecendo hoje.",
            stats: {
                revenue: "Faturamento Total",
                orders: "Pedidos Ativos",
                avgTicket: "Ticket Médio",
                secure: "Processado via PagBank",
                trendUp: "+12.5% vs ontem",
                trendDown: "-2.1% vs ontem",
            },
            charts: {
                title: "Vendas por Hora",
                today: "Hoje",
            },
            activity: {
                title: "Atividade em Tempo Real",
                justNow: "Agora",
            }
        },
        pos: {
            categories: {
                all: "Todos",
                bread: "Pães",
                sweet: "Doces",
                drink: "Bebidas"
            },
            cart: {
                title: "Pedido Atual",
                items: "itens",
                empty: "Seu carrinho está vazio",
                subtotal: "Subtotal",
                tax: "Taxa (10%)",
                total: "Total",
                checkout: "Finalizar",
                poweredBy: "Tecnologia PagBank"
            },
            product: {
                add: "Adicionar"
            }
        },
        kds: {
            title: "Sistema de Cozinha",
            columns: {
                pending: "Pendente",
                preparing: "Preparando",
                ready: "Pronto",
                delivery: "Em Entrega"
            },
            move: "Avançar"
        },
        inventory: {
            title: "Gestão de Estoque",
            subtitle: "Monitore ingredientes e pedidos a fornecedores.",
            refresh: "Atualizar Dados",
            table: {
                ingredient: "Ingrediente",
                status: "Status",
                level: "Nível",
                actions: "Ações",
                reorder: "Pedir"
            }
        },
        checkout: {
            title: "Finalizar Pagamento",
            totalAmount: "Valor Total",
            methods: {
                credit: "Crédito",
                debit: "Débito",
                pix: "PIX",
                cash: "Dinheiro"
            },
            processing: {
                title: "Conectando ao Terminal...",
                subtitle: "Aproxime o cartão na maquininha"
            },
            success: {
                title: "Transação Aprovada!",
                subtitle: "Comprovante impresso e enviado por e-mail.",
                totalPaid: "Total Pago",
                txId: "ID Transação"
            }
        },
        toasts: {
            orderSuccess: "Venda realizada com sucesso!",
            itemAdded: "Item adicionado ao carrinho",
            refreshing: "Atualizando dados de estoque...",
            lowStock: "Alerta de estoque: {item}"
        }
    }
};

// --- Types ---
type Tab = 'dashboard' | 'pos' | 'kds' | 'inventory';

interface Product {
    id: string;
    name: { en: string; pt: string };
    price: number;
    category: 'bread' | 'sweet' | 'drink';
    image: string;
    description: { en: string; pt: string };
}

interface CartItem extends Omit<Product, 'name' | 'description'> {
    name: string;
    description: string;
    quantity: number;
}

interface Order {
    id: string;
    items: string[];
    status: 'pending' | 'preparing' | 'ready' | 'delivery';
    timestamp: Date;
    driverName?: string;
}

interface Ingredient {
    id: string;
    name: { en: string; pt: string };
    stock: number;
    unit: string;
    status: 'ok' | 'low' | 'critical';
}

interface Notification {
    id: string;
    message: { en: string; pt: string };
    time: string;
    type: 'info' | 'success' | 'warning';
}

interface Toast {
    id: string;
    message: string;
    type: 'success' | 'info' | 'error';
}

// --- Mock Data ---
const PRODUCTS: Product[] = [
    { id: '1', name: { en: 'Sourdough Bread', pt: 'Pão Francês' }, price: 0.80, category: 'bread', image: '🥖', description: { en: 'Natural fermentation sourdough', pt: 'Fermentação natural tradicional' } },
    { id: '2', name: { en: 'Almond Croissant', pt: 'Croissant de Amêndoas' }, price: 5.50, category: 'bread', image: '🥐', description: { en: 'Butter croissant with almond flakes', pt: 'Croissant amanteigado com amêndoas' } },
    { id: '3', name: { en: 'Cheese Bread', pt: 'Pão de Queijo' }, price: 3.00, category: 'bread', image: '🧀', description: { en: 'Brazilian cheesy bites', pt: 'Tradicional pão de queijo mineiro' } },
    { id: '4', name: { en: 'Cream Dream', pt: 'Sonho de Creme' }, price: 4.50, category: 'sweet', image: '🍩', description: { en: 'Filled with vanilla custard', pt: 'Recheado com creme de baunilha' } },
    { id: '5', name: { en: 'Corn Cake', pt: 'Bolo de Milho' }, price: 12.00, category: 'sweet', image: '🌽', description: { en: 'Traditional homemade recipe', pt: 'Receita caseira tradicional' } },
    { id: '6', name: { en: 'Chocolate Truffle', pt: 'Brigadeiro' }, price: 2.50, category: 'sweet', image: '🍫', description: { en: 'Brazilian chocolate truffle', pt: 'Chocolate nobre com granulado' } },
    { id: '7', name: { en: 'Espresso', pt: 'Café Expresso' }, price: 4.00, category: 'drink', image: '☕', description: { en: 'Intense flavor shot', pt: 'Grãos selecionados' } },
    { id: '8', name: { en: 'Orange Juice', pt: 'Suco de Laranja' }, price: 7.00, category: 'drink', image: '🍊', description: { en: 'Freshly squeezed', pt: 'Espremido na hora' } },
    { id: '9', name: { en: 'Cappuccino', pt: 'Cappuccino' }, price: 6.50, category: 'drink', image: '🥛', description: { en: 'Creamy milk and coffee', pt: 'Leite vaporizado e café' } },
];

const INITIAL_INVENTORY: Ingredient[] = [
    { id: '1', name: { en: 'Wheat Flour', pt: 'Farinha de Trigo' }, stock: 85, unit: 'kg', status: 'ok' },
    { id: '2', name: { en: 'Refined Sugar', pt: 'Açúcar Refinado' }, stock: 45, unit: 'kg', status: 'ok' },
    { id: '3', name: { en: 'Whole Milk', pt: 'Leite Integral' }, stock: 12, unit: 'L', status: 'critical' },
    { id: '4', name: { en: 'Eggs', pt: 'Ovos' }, stock: 30, unit: 'dz', status: 'low' },
    { id: '5', name: { en: 'Coffee Beans', pt: 'Café em Grãos' }, stock: 60, unit: 'kg', status: 'ok' },
];

// --- Components ---

const Toast = ({ message, type, onDismiss }: { message: string; type: Toast['type']; onDismiss: () => void }) => (
    <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        className={cn(
            "fixed bottom-8 right-8 z-[100] px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-stone-800 backdrop-blur-md",
            type === 'success' ? "bg-green-600 text-stone-100" : "bg-stone-900 text-stone-100"
        )}
    >
        {type === 'success' ? <CheckCircle2 size={20} /> : <Bell size={20} className="text-orange-500" />}
        <span className="font-medium text-sm">{message}</span>
        <button onClick={onDismiss} className="hover:opacity-70 transition-opacity ml-2 text-stone-400">
            <X size={16} />
        </button>
    </motion.div>
);

const Skeleton = ({ className }: { className?: string }) => (
    <div className={cn("bg-stone-800 animate-pulse rounded-xl", className)} />
);

const PagBankBadge = ({ language, className }: { language: 'en' | 'pt', className?: string }) => (
    <div className={cn("flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-900/20 border border-green-500/20", className)}>
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs font-semibold text-green-400">{BAKERY_DICT[language].sidebar.connected}</span>
    </div>
);

const Sidebar = ({ activeTab, setActiveTab, isOpen, setIsOpen, language, t }: {
    activeTab: Tab;
    setActiveTab: (t: Tab) => void;
    isOpen: boolean;
    setIsOpen: (o: boolean) => void;
    language: 'en' | 'pt';
    t: any;
}) => {
    const menuItems = [
        { id: 'dashboard', icon: LayoutDashboard, label: t.sidebar.dashboard },
        { id: 'pos', icon: Store, label: t.sidebar.pos },
        { id: 'kds', icon: ChefHat, label: t.sidebar.kds },
        { id: 'inventory', icon: Package, label: t.sidebar.inventory },
    ];

    return (
        <motion.aside
            initial={false}
            animate={{ width: isOpen ? 280 : 80 }}
            className="relative z-50 h-screen bg-stone-900 border-r border-stone-800 shadow-xl hidden md:flex flex-col"
        >
            <div className="p-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-orange-600/20">
                    B
                </div>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col"
                    >
                        <span className="font-bold text-stone-100 text-lg leading-tight">BakeryOS</span>
                        <span className="text-xs text-stone-500">Premium ERP</span>
                    </motion.div>
                )}
            </div>

            <nav className="flex-1 px-4 py-6 space-y-2">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id as Tab)}
                        className={cn(
                            "w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group relative overflow-hidden",
                            activeTab === item.id
                                ? "bg-orange-600/10 text-orange-400 font-semibold shadow-sm"
                                : "text-stone-400 hover:bg-stone-800 hover:text-stone-100"
                        )}
                    >
                        {activeTab === item.id && (
                            <motion.div
                                layoutId="activeTabIndicator"
                                className="absolute inset-y-0 left-0 w-1 bg-orange-600 rounded-r-full"
                            />
                        )}
                        <item.icon size={22} className={cn("transition-colors", activeTab === item.id ? "text-orange-500" : "text-stone-500 group-hover:text-stone-300")} />
                        {isOpen && (
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="whitespace-nowrap"
                            >
                                {item.label}
                            </motion.span>
                        )}
                    </button>
                ))}
            </nav>

            <div className="p-4 border-t border-stone-800 space-y-4">
                {isOpen && (
                    <div className="bg-orange-600/10 p-3 rounded-xl border border-stone-800">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">{t.sidebar.systemStatus}</span>
                            <PagBankBadge language={language} />
                        </div>
                        <div className="flex items-center gap-2 text-xs text-stone-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                            {t.sidebar.operational}
                        </div>
                    </div>
                )}

                <div className="flex items-center gap-3 px-2">
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                        alt="User"
                        className="w-10 h-10 rounded-full border-2 border-stone-800 shadow-sm"
                    />
                    {isOpen && (
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold text-stone-200">João Silva</span>
                            <span className="text-xs text-stone-500">{t.sidebar.manager}</span>
                        </div>
                    )}
                </div>
            </div>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="absolute -right-3 top-10 w-6 h-6 bg-stone-800 border border-stone-700 rounded-full flex items-center justify-center shadow-sm text-stone-400 hover:text-orange-500 transition-colors"
            >
                {isOpen ? <X size={12} /> : <Menu size={12} />}
            </button>
        </motion.aside>
    );
};

// --- Mock Data Generators --
const generateActivity = (id: number, t: any) => {
    const actions = [
        { msg: t.dashboard.activity.msg1 || "Order #403 sent to Kitchen", type: "info" },
        { msg: t.dashboard.activity.msg2 || "Inventory Alert: Flour Low", type: "warning" },
        { msg: t.dashboard.activity.msg3 || "Payment Approved", type: "success" },
    ] as const;
    const action = actions[Math.floor(Math.random() * actions.length)];
    return { id: id.toString(), message: { en: action.msg, pt: action.msg }, time: t.dashboard.activity.justNow, type: action.type };
};

export default function BakeryERP() {
    const { language } = useLanguage();
    const t = BAKERY_DICT[language];

    const [activeTab, setActiveTab] = useState<Tab>('dashboard');
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [toasts, setToasts] = useState<Toast[]>([]);

    // Real-time states
    const [revenue, setRevenue] = useState(2850.50);
    const [activeOrders, setActiveOrders] = useState<Order[]>([
        { id: '101', items: ['Sourdough Bread', 'Espresso'], status: 'ready', timestamp: new Date(Date.now() - 1000 * 60 * 15) },
        { id: '102', items: ['Corn Cake'], status: 'preparing', timestamp: new Date(Date.now() - 1000 * 60 * 5) },
        { id: '103', items: ['Orange Juice'], status: 'pending', timestamp: new Date() },
        { id: '104', items: ['Cake', 'Coffee'], status: 'delivery', timestamp: new Date(Date.now() - 1000 * 60 * 20), driverName: "Carlos R." },
    ]);
    const [inventory, setInventory] = useState(INITIAL_INVENTORY);
    const [notifications, setNotifications] = useState<Notification[]>([
        { id: '1', message: { en: 'System updated successfully', pt: 'Sistema atualizado com sucesso' }, time: '10:00 AM', type: 'info' }
    ]);

    // POS State
    const [cart, setCart] = useState<CartItem[]>([]);
    const [showCheckout, setShowCheckout] = useState(false);

    // Helpers
    const formatCurrency = (val: number) => {
        return val.toLocaleString(language === 'en' ? 'en-US' : 'pt-BR', {
            style: 'currency',
            currency: language === 'en' ? 'USD' : 'BRL'
        });
    };

    const addToast = useCallback((message: string, type: Toast['type'] = 'info') => {
        const id = Date.now().toString();
        setToasts(prev => [...prev, { id, message, type }]);
        setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4000);
    }, []);

    // Effects
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isLoading) return;

        const interval = setInterval(() => {
            if (Math.random() > 0.8) {
                setRevenue(prev => prev + parseFloat((Math.random() * 50).toFixed(2)));
            }

            setActiveOrders(prev => prev.map(order => {
                if (order.status === 'pending' && Math.random() > 0.85) return { ...order, status: 'preparing' };
                if (order.status === 'preparing' && Math.random() > 0.9) return { ...order, status: 'ready' };
                return order;
            }));
        }, 4000);
        return () => clearInterval(interval);
    }, [isLoading]);

    return (
        <div className="flex h-screen w-full font-sans overflow-hidden bg-stone-950 text-stone-100">
            <Sidebar
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                isOpen={sidebarOpen}
                setIsOpen={setSidebarOpen}
                language={language}
                t={t}
            />

            <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                {/* Top Header */}
                <header className="h-16 bg-stone-900/80 backdrop-blur-md border-b border-stone-800 flex items-center justify-between px-8 z-40 sticky top-0">
                    <div className="flex items-center gap-4 flex-1">
                        <div className="relative w-96 hidden sm:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" size={18} />
                            <input
                                type="text"
                                placeholder={t.topbar.search}
                                className="w-full pl-10 pr-4 py-2 rounded-full bg-stone-800 border-none focus:ring-2 focus:ring-orange-500/20 focus:bg-stone-700 transition-all text-sm outline-none text-stone-100 placeholder:text-stone-500"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="relative p-2 rounded-full hover:bg-stone-800 text-stone-400 transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-600 rounded-full border-2 border-stone-900" />
                        </button>
                        <button
                            onClick={() => {
                                setActiveTab('pos');
                                addToast(t.toasts.itemAdded, 'info');
                            }}
                            className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-700 transition-all shadow-lg active:scale-95 duration-150"
                        >
                            <Plus size={16} />
                            {t.topbar.newOrder}
                        </button>
                    </div>
                </header>

                {/* Content Area */}
                <div className="flex-1 overflow-auto p-4 sm:p-8 relative">
                    <AnimatePresence mode="wait">
                        {isLoading ? (
                            <LoadingView key="loading" />
                        ) : (
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="h-full"
                            >
                                {activeTab === 'dashboard' && <DashboardView revenue={revenue} notifications={notifications} language={language} t={t} formatCurrency={formatCurrency} />}
                                {activeTab === 'pos' && (
                                    <POSView
                                        products={PRODUCTS}
                                        cart={cart}
                                        setCart={setCart}
                                        onCheckout={() => setShowCheckout(true)}
                                        language={language}
                                        t={t}
                                        formatCurrency={formatCurrency}
                                        addToast={addToast}
                                    />
                                )}
                                {activeTab === 'kds' && <KDSView orders={activeOrders} language={language} t={t} />}
                                {activeTab === 'inventory' && <InventoryView inventory={inventory} setInventory={setInventory} language={language} t={t} addToast={addToast} />}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>

            {/* Checkout Modal Overlay */}
            <AnimatePresence>
                {showCheckout && (
                    <CheckoutModal
                        total={cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)}
                        onClose={() => setShowCheckout(false)}
                        onSuccess={() => {
                            setCart([]);
                            setShowCheckout(false);
                            setRevenue(prev => prev + cart.reduce((acc, item) => acc + (item.price * item.quantity), 0));
                            addToast(t.toasts.orderSuccess, 'success');
                        }}
                        language={language}
                        t={t}
                        formatCurrency={formatCurrency}
                    />
                )}
            </AnimatePresence>

            {/* Toasts */}
            <AnimatePresence>
                {toasts.map(toast => (
                    <Toast
                        key={toast.id}
                        message={toast.message}
                        type={toast.type}
                        onDismiss={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}

// --- View Components ---

function LoadingView() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="space-y-2">
                <Skeleton className="h-8 w-64" />
                <Skeleton className="h-4 w-96" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Skeleton className="h-40" />
                <Skeleton className="h-40" />
                <Skeleton className="h-40" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-96">
                <Skeleton className="lg:col-span-2 h-full" />
                <Skeleton className="h-full" />
            </div>
        </div>
    );
}

function DashboardView({ revenue, notifications, language, t, formatCurrency }: any) {
    return (
        <div className="space-y-6 max-w-7xl mx-auto">
            <div>
                <h1 className="text-2xl font-bold text-stone-100">{t.dashboard.title}</h1>
                <p className="text-stone-400">{t.dashboard.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                    title={t.dashboard.stats.revenue}
                    value={formatCurrency(revenue)}
                    trend={t.dashboard.stats.trendUp}
                    icon={TrendingUp}
                    color="bg-green-500"
                    subtitle={t.dashboard.stats.secure}
                />
                <StatCard
                    title={t.dashboard.stats.orders}
                    value="24"
                    trend="+4"
                    icon={ShoppingBag}
                    color="bg-orange-500"
                />
                <StatCard
                    title={t.dashboard.stats.avgTicket}
                    value={formatCurrency(32.50)}
                    trend={t.dashboard.stats.trendDown}
                    icon={Users}
                    color="bg-blue-500"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:h-96">
                {/* Animated Charts */}
                <div className="lg:col-span-2 bg-stone-900 p-6 rounded-2xl shadow-sm border border-stone-800 flex flex-col transition-colors">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-semibold text-stone-200">{t.dashboard.charts.title}</h3>
                        <div className="flex gap-2">
                            <span className="w-3 h-3 rounded-full bg-orange-600" />
                            <span className="text-xs text-stone-500">{t.dashboard.charts.today}</span>
                        </div>
                    </div>
                    <div className="flex-1 flex items-end justify-between gap-1 sm:gap-2 px-1 sm:px-4">
                        {[30, 45, 25, 60, 75, 50, 80, 95, 65, 40, 55, 70].map((h, i) => (
                            <div key={i} className="flex flex-col items-center gap-2 group w-full">
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 1.2, delay: i * 0.05, type: "spring" }}
                                    className="w-full bg-orange-600/10 rounded-t-lg group-hover:bg-orange-600 transition-colors relative"
                                >
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-stone-800 text-stone-100 text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-stone-700">
                                        {formatCurrency(h * 10)}
                                    </div>
                                </motion.div>
                                <span className="text-[10px] text-stone-500 font-medium">{i + 8}h</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Live Activity Feed */}
                <div className="bg-stone-900 p-6 rounded-2xl shadow-sm border border-stone-800 flex flex-col overflow-hidden transition-colors">
                    <h3 className="font-semibold text-stone-200 mb-4">{t.dashboard.activity.title}</h3>
                    <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-stone-800">
                        {notifications.map((note, i) => (
                            <motion.div
                                key={note.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-3 p-3 rounded-xl bg-stone-800/50 border border-stone-800"
                            >
                                <div className={cn(
                                    "w-2 h-2 mt-1.5 rounded-full shrink-0",
                                    note.type === 'info' ? 'bg-blue-500' : note.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                                )} />
                                <div>
                                    <p className="text-xs sm:text-sm text-stone-300 leading-tight">{note.message[language as 'en' | 'pt']}</p>
                                    <span className="text-[10px] text-stone-500">{note.time}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function POSView({ products, cart, setCart, onCheckout, language, t, formatCurrency, addToast }: any) {
    const [category, setCategory] = useState<'all' | 'bread' | 'sweet' | 'drink'>('all');

    const filteredProducts = products.filter((p: any) => category === 'all' || p.category === category);
    const subtotal = cart.reduce((acc: number, item: any) => acc + (item.price * item.quantity), 0);

    const addToCart = (product: Product) => {
        setCart((prev: any) => {
            const existing = prev.find((p: any) => p.id === product.id);
            if (existing) {
                return prev.map((p: any) => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p);
            }
            return [...prev, {
                ...product,
                name: product.name[language as 'en' | 'pt'],
                description: product.description[language as 'en' | 'pt'],
                quantity: 1
            }];
        });
        addToast(`${product.name[language as 'en' | 'pt']} ${t.pos.product.add}`, 'info');
    };

    const removeFromCart = (id: string) => {
        setCart((prev: any) => prev.filter((p: any) => p.id !== id));
    }

    return (
        <div className="flex flex-col lg:flex-row h-full gap-6 overflow-hidden">
            <div className="flex-1 flex flex-col gap-6 overflow-hidden">
                {/* Category Tabs */}
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                    {Object.keys(t.pos.categories).map(cat => (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat as any)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-medium capitalize transition-all shrink-0",
                                category === cat
                                    ? "bg-orange-600 text-white shadow-lg"
                                    : "bg-stone-900 text-stone-400 hover:bg-stone-800 border border-stone-800"
                            )}
                        >
                            {t.pos.categories[cat as keyof typeof t.pos.categories]}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-y-auto pb-4 pr-1">
                    {filteredProducts.map((product: any) => (
                        <motion.div
                            layoutId={product.id}
                            key={product.id}
                            onClick={() => addToCart(product)}
                            className="group bg-stone-900 p-4 rounded-2xl border border-stone-800 shadow-sm hover:shadow-md hover:border-orange-600/50 transition-all cursor-pointer flex flex-col items-center gap-3 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="text-4xl bg-stone-800 w-16 h-16 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                                {product.image}
                            </div>
                            <div className="text-center relative z-10 w-full">
                                <h3 className="font-semibold text-stone-100 text-sm">{product.name[language as 'en' | 'pt']}</h3>
                                <p className="text-[10px] text-stone-500 mt-1 line-clamp-1">{product.description[language as 'en' | 'pt']}</p>
                                <p className="text-orange-500 font-bold mt-2">
                                    {formatCurrency(product.price)}
                                </p>
                            </div>
                            <button className="w-full mt-2 py-2 rounded-xl bg-stone-800 text-stone-100 text-[10px] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 border border-stone-700">
                                {t.pos.product.add}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Live Cart Sidebar */}
            <div className="w-full lg:w-96 bg-stone-900 rounded-3xl shadow-xl border border-stone-800 flex flex-col overflow-hidden transition-colors">
                <div className="p-6 border-b border-stone-800 bg-stone-800/20">
                    <h2 className="font-bold text-lg text-stone-100 flex items-center gap-2">
                        {t.pos.cart.title}
                        <span className="bg-orange-900/40 text-orange-400 text-xs px-2 py-1 rounded-full">{cart.length} {t.pos.cart.items}</span>
                    </h2>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {cart.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-stone-600 gap-3 opacity-40">
                            <ShoppingBag size={48} />
                            <p className="text-sm">{t.pos.cart.empty}</p>
                        </div>
                    ) : (
                        cart.map((item: any) => (
                            <motion.div
                                layout
                                key={item.id}
                                className="flex items-center gap-4 p-3 bg-stone-800/40 rounded-xl group border border-transparent hover:border-stone-700 transition-all"
                            >
                                <div className="w-10 h-10 rounded-lg bg-stone-800 flex items-center justify-center text-xl shadow-sm border border-stone-700">
                                    {item.image}
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-sm font-medium text-stone-100">{item.name}</h4>
                                    <p className="text-[10px] text-stone-500">
                                        {item.quantity}x <span className="text-stone-700">|</span> {formatCurrency(item.price)}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-sm text-stone-100">
                                        {formatCurrency(item.price * item.quantity)}
                                    </p>
                                </div>
                                <button
                                    onClick={(e) => { e.stopPropagation(); removeFromCart(item.id); }}
                                    className="opacity-0 group-hover:opacity-100 text-red-500 hover:bg-red-900/20 p-1 rounded-md transition-all"
                                >
                                    <X size={14} />
                                </button>
                            </motion.div>
                        ))
                    )}
                </div>

                <div className="p-6 bg-stone-800/40 border-t border-stone-800">
                    <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-xs text-stone-500">
                            <span>{t.pos.cart.subtotal}</span>
                            <span>{formatCurrency(subtotal)}</span>
                        </div>
                        <div className="flex justify-between text-xs text-stone-500">
                            <span>{t.pos.cart.tax}</span>
                            <span>{formatCurrency(subtotal * 0.1)}</span>
                        </div>
                    </div>
                    <div className="flex justify-between text-xl font-bold text-white mb-6">
                        <span>{t.pos.cart.total}</span>
                        <span>{formatCurrency(subtotal * 1.1)}</span>
                    </div>

                    <button
                        disabled={cart.length === 0}
                        onClick={onCheckout}
                        className="w-full py-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg shadow-lg active:scale-95 transition-all disabled:opacity-50 disabled:active:scale-100 flex items-center justify-center gap-2"
                    >
                        {t.pos.cart.checkout} <ArrowRight size={20} />
                    </button>

                    <div className="mt-4 flex justify-center">
                        <div className="flex items-center gap-1.5 text-[9px] text-stone-600 uppercase tracking-widest font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                            {t.pos.cart.poweredBy}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function KDSView({ orders, language, t }: any) {
    const columns = [
        { id: 'pending', label: t.kds.columns.pending, color: 'text-stone-400', border: 'border-stone-700' },
        { id: 'preparing', label: t.kds.columns.preparing, color: 'text-orange-400', border: 'border-orange-600' },
        { id: 'ready', label: t.kds.columns.ready, color: 'text-green-400', border: 'border-green-600' },
        { id: 'delivery', label: t.kds.columns.delivery, color: 'text-blue-400', border: 'border-blue-600' },
    ];

    return (
        <div className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-stone-100">{t.kds.title}</h2>
                <div className="flex items-center gap-2 text-stone-400 bg-stone-900 px-3 py-1 rounded-full border border-stone-800">
                    <Clock size={14} />
                    <span className="text-xs font-mono">{new Date().toLocaleTimeString()}</span>
                </div>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 overflow-hidden">
                {columns.map(col => (
                    <div key={col.id} className="flex flex-col h-full bg-stone-900/50 rounded-2xl p-4 border border-stone-800">
                        <div className={cn("flex items-center justify-between px-2 mb-4", col.color)}>
                            <h3 className="font-bold uppercase tracking-wide text-xs">{col.label}</h3>
                            <span className="bg-stone-800 px-2 py-0.5 rounded-full text-[10px] font-bold shadow-sm border border-stone-700">
                                {orders.filter((o: any) => o.status === col.id).length}
                            </span>
                        </div>

                        <div className="flex-1 overflow-y-auto space-y-3 pr-1 scrollbar-thin scrollbar-thumb-stone-800">
                            <AnimatePresence>
                                {orders.filter((o: any) => o.status === col.id).map((order: any) => (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        key={order.id}
                                        className={cn("bg-stone-900 p-4 rounded-xl border-l-4 shadow-sm transition-colors border-y border-r border-stone-800", col.border)}
                                    >
                                        <div className="flex justify-between items-start mb-3">
                                            <span className="font-bold text-base text-stone-100">#{order.id}</span>
                                            <span className="text-[10px] text-stone-500 font-mono">
                                                {Math.floor((Date.now() - order.timestamp.getTime()) / 60000)}m
                                            </span>
                                        </div>
                                        <ul className="space-y-1">
                                            {order.items.map((item: string, i: number) => (
                                                <li key={i} className="text-xs text-stone-400 flex items-center gap-2">
                                                    <span className="w-1 h-1 rounded-full bg-stone-700" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        {order.status === 'delivery' && (
                                            <div className="mt-3 flex items-center gap-2 px-2 py-1 bg-blue-900/20 rounded-lg border border-blue-900/30">
                                                <Bike size={14} className="text-blue-400" />
                                                <span className="text-[10px] font-medium text-blue-300">{order.driverName}</span>
                                            </div>
                                        )}

                                        <div className="mt-4 pt-3 border-t border-stone-800 flex justify-end">
                                            <button className="text-[10px] font-bold text-stone-500 hover:text-stone-300 transition-colors uppercase flex items-center gap-1">
                                                {t.kds.move} <ArrowRight size={12} />
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function InventoryView({ inventory, setInventory, language, t, addToast }: any) {
    const handleRefresh = () => {
        addToast(t.toasts.refreshing, 'info');
        // Simulate refresh logic
    };

    return (
        <div className="max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-stone-100">{t.inventory.title}</h1>
                    <p className="text-stone-500 text-sm">{t.inventory.subtitle}</p>
                </div>
                <button
                    onClick={handleRefresh}
                    className="flex items-center gap-2 bg-stone-900 border border-stone-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-stone-800 transition-colors text-stone-200"
                >
                    <RefreshCw size={14} /> {t.inventory.refresh}
                </button>
            </div>

            <div className="bg-stone-900 rounded-2xl shadow-sm border border-stone-800 overflow-hidden transition-colors">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-stone-800/50 border-b border-stone-800">
                            <tr>
                                <th className="py-4 px-6 text-[10px] font-bold text-stone-500 uppercase tracking-widest">{t.inventory.table.ingredient}</th>
                                <th className="py-4 px-6 text-[10px] font-bold text-stone-500 uppercase tracking-widest">{t.inventory.table.status}</th>
                                <th className="py-4 px-6 text-[10px] font-bold text-stone-500 uppercase tracking-widest w-1/3">{t.inventory.table.level}</th>
                                <th className="py-4 px-6 text-[10px] font-bold text-stone-500 uppercase tracking-widest text-right">{t.inventory.table.actions}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-800">
                            {inventory.map((item: any) => (
                                <tr key={item.id} className="hover:bg-stone-800/30 transition-colors">
                                    <td className="py-4 px-6">
                                        <span className="font-medium text-stone-200 text-sm">{item.name[language as 'en' | 'pt']}</span>
                                        <span className="text-[10px] text-stone-500 block">{item.unit}</span>
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className={cn(
                                            "px-2 py-1 rounded-full text-[10px] font-bold border",
                                            item.status === 'ok' ? "bg-green-900/20 text-green-400 border-green-900/40" :
                                                item.status === 'low' ? "bg-yellow-900/20 text-yellow-400 border-yellow-900/40" :
                                                    "bg-red-900/20 text-red-400 border-red-900/40"
                                        )}>
                                            {item.status.toUpperCase()}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-3">
                                            <div className="flex-1 h-1.5 bg-stone-800 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${item.stock}%` }}
                                                    className={cn(
                                                        "h-full rounded-full transition-all duration-1000",
                                                        item.stock > 50 ? "bg-green-500" : item.stock > 20 ? "bg-yellow-500" : "bg-red-500"
                                                    )}
                                                />
                                            </div>
                                            <span className="text-[10px] font-mono text-stone-500 w-12 text-right">{item.stock}%</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-right">
                                        {item.stock < 40 && (
                                            <button className="text-[10px] font-bold bg-orange-600 text-white px-3 py-1.5 rounded-lg hover:bg-orange-700 transition-all shadow-sm">
                                                {t.inventory.table.reorder}
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

const StatCard = ({ title, value, trend, icon: Icon, color, subtitle }: any) => {
    const colorVariant = COLOR_VARIANTS[color as keyof typeof COLOR_VARIANTS] || COLOR_VARIANTS['bg-green-500'];

    return (
        <div className="bg-stone-900 p-6 rounded-2xl shadow-sm border border-stone-800 hover:shadow-md transition-all relative overflow-hidden group">
            <div className="flex justify-between items-start mb-4">
                <div className={cn("p-3 rounded-xl", colorVariant.bg)}>
                    <Icon size={24} className={colorVariant.icon} />
                </div>
                <span className={cn("text-[10px] font-bold px-2 py-1 rounded-full", trend.startsWith('+') ? "bg-green-900/50 text-green-400" : "bg-red-900/50 text-red-400")}>
                    {trend}
                </span>
            </div>
            <div>
                <h3 className="text-stone-500 text-xs font-medium">{title}</h3>
                <p className="text-2xl font-bold text-stone-100 mt-1">{value}</p>
                {subtitle && (
                    <p className="text-[10px] text-stone-500 mt-2 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
};

function CheckoutModal({ total, onClose, onSuccess, language, t, formatCurrency }: any) {
    const [step, setStep] = useState<'method' | 'processing' | 'success'>('method');

    const handlePayment = () => {
        setStep('processing');
        setTimeout(() => {
            setStep('success');
            setTimeout(onSuccess, 2000);
        }, 2500);
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-stone-900 rounded-[2.5rem] shadow-2xl w-full max-w-md overflow-hidden"
            >
                <div className="p-6 bg-stone-800/50 border-b border-stone-800 flex justify-between items-center">
                    <h3 className="font-bold text-lg text-stone-100">{t.checkout.title}</h3>
                    <button onClick={onClose} className="p-2 hover:bg-stone-800 rounded-full transition-colors text-stone-400"><X size={18} /></button>
                </div>

                <div className="p-8">
                    {step === 'method' && (
                        <div className="space-y-6">
                            <div className="text-center mb-8">
                                <p className="text-stone-500 text-sm">{t.checkout.totalAmount}</p>
                                <p className="text-4xl font-bold text-stone-100 mt-2">
                                    {formatCurrency(total * 1.1)}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { id: 'credit', icon: CreditCard, label: t.checkout.methods.credit },
                                    { id: 'debit', icon: CreditCard, label: t.checkout.methods.debit },
                                    { id: 'pix', icon: QrCode, label: t.checkout.methods.pix },
                                    { id: 'cash', icon: Banknote, label: t.checkout.methods.cash }
                                ].map(method => (
                                    <button
                                        key={method.id}
                                        onClick={handlePayment}
                                        className="flex flex-col items-center gap-3 p-4 rounded-2xl border border-stone-800 hover:border-orange-600 hover:bg-orange-900/10 transition-all group"
                                    >
                                        <method.icon size={28} className="text-stone-400 group-hover:text-orange-600 transition-colors" />
                                        <span className="font-semibold text-[11px] text-stone-300">{method.label}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="flex items-center justify-center gap-2 mt-6 opacity-40">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                <span className="text-[9px] font-bold text-stone-500 uppercase tracking-widest">{BAKERY_DICT[language as 'en' | 'pt'].pos.cart.poweredBy}</span>
                            </div>
                        </div>
                    )}

                    {step === 'processing' && (
                        <div className="py-12 flex flex-col items-center text-center">
                            <div className="relative">
                                <div className="w-16 h-16 border-4 border-stone-800 border-t-orange-600 rounded-full animate-spin" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-8 h-8 bg-orange-600 rounded-sm animate-pulse opacity-20" />
                                </div>
                            </div>
                            <h4 className="mt-6 font-bold text-lg text-stone-100">{t.checkout.processing.title}</h4>
                            <p className="text-stone-500 text-sm mt-2">{t.checkout.processing.subtitle}</p>
                        </div>
                    )}

                    {step === 'success' && (
                        <div className="py-8 flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-green-900/30 rounded-full flex items-center justify-center mb-6 text-green-400">
                                <CheckCircle2 size={40} />
                            </div>
                            <h4 className="font-bold text-2xl text-stone-100">{t.checkout.success.title}</h4>
                            <p className="text-stone-500 mt-2">{t.checkout.success.subtitle}</p>

                            <div className="mt-8 w-full bg-stone-800 p-4 rounded-xl border border-dashed border-stone-700">
                                <div className="flex justify-between text-xs mb-2">
                                    <span className="text-stone-500">{t.checkout.success.totalPaid}</span>
                                    <span className="font-bold text-stone-100">{formatCurrency(total * 1.1)}</span>
                                </div>
                                <div className="flex justify-between text-[10px]">
                                    <span className="text-stone-500">{t.checkout.success.txId}</span>
                                    <span className="font-mono text-stone-400">#PAG-{Math.floor(Math.random() * 100000)}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}