// 模拟工具数据
const tools = [
    {
        id: 1,
        name: "DTO",
        description: "一个类似 Hacker News, Lobsters 的链接分享社区",
        logo: "https://via.placeholder.com/100x100.png?text=DTO",
        tags: ["程序员", "社区"],
        category: "new"
    },
    {
        id: 2,
        name: "BestXTools 社区",
        description: "发现并分享有趣、好用、高效的工具",
        logo: "https://via.placeholder.com/100x100.png?text=BestXTools",
        tags: ["在线工具", "分享", "社区"],
        category: "new"
    },
    {
        id: 3,
        name: "Pipecraft 社区",
        description: "这里是可以自由交流关于 RSS, Atom, JSON Feed, 聚合新闻, 内容订阅等话题的地方",
        logo: "https://via.placeholder.com/100x100.png?text=Pipecraft",
        tags: ["RSS", "Atom", "聚合新闻", "内容订阅"],
        category: "recommended"
    },
    {
        id: 4,
        name: "纵横网址导航",
        description: "收集小而美的中文独立博客、论坛、主题网站等网址导航网站。",
        logo: "https://via.placeholder.com/100x100.png?text=纵横",
        tags: ["网址导航", "中文博客", "独立博客"],
        category: "programmer"
    }
];

// 在主页显示工具
function displayTools() {
    const categories = ['new', 'recommended', 'programmer'];
    categories.forEach(category => {
        const container = document.getElementById(`${category}Tools`);
        if (container) {
            const categoryTools = tools.filter(tool => tool.category === category);
            categoryTools.forEach(tool => {
                const toolCard = createToolCard(tool);
                container.appendChild(toolCard);
            });
        }
    });
}

// 创建工具卡片
function createToolCard(tool) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.innerHTML = `
        <img src="${tool.logo}" alt="${tool.name} logo">
        <h3>${tool.name}</h3>
        <p>${tool.description}</p>
        <div class="tags">
            ${tool.tags.map(tag => `<span>${tag}</span>`).join('')}
        </div>
    `;
    card.addEventListener('click', () => {
        window.location.href = `tool-detail.html?id=${tool.id}`;
    });
    return card;
}

// 显示工具详情
function displayToolDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const toolId = parseInt(urlParams.get('id'));
    const tool = tools.find(t => t.id === toolId);

    if (tool) {
        const detailContainer = document.getElementById('toolDetail');
        detailContainer.innerHTML = `
            <h2>${tool.name}</h2>
            <img src="${tool.logo}" alt="${tool.name} logo" style="max-width: 200px;">
            <p>${tool.description}</p>
            <div class="tags">
                ${tool.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
        `;
    }
}

// 页面加载时执行相应函数
if (document.getElementById('newTools')) {
    displayTools();
} else if (document.getElementById('toolDetail')) {
    displayToolDetail();
}
