export interface Experiment {
    slug: string;
    target: string;
    focus: string;
    note: string;
    full_description: string;
    status: 'Active' | 'Complete' | 'Draft';
    hypothesis: string;
    tech_stack: string[];
}

export const experiments: Experiment[] = [
    {
        slug: 'autonomous-dispatch',
        target: 'Autonomous Dispatch',
        focus: 'Coordination Mechanics',
        note: 'Testing LLM-based priority weighting for emergency resource allocation in multi-point crisis scenarios.',
        full_description: 'A structural investigation into how decentralized AI agents can manage resource allocation in environments with radical uncertainty. We are building a simulation layer that allows LLM-based dispatchers to weigh competing high-priority signals in real-time, reducing cognitive load for human coordinators while maintaining strictly governed safety protocols.',
        status: 'Active',
        hypothesis: 'Decentralized LLM weighting reduces dispatch latency by 40% in multi-point crisis scenarios.',
        tech_stack: ['Python', 'LangChain', 'Agentic Workflows', 'Discrete Event Simulation']
    },
    {
        slug: 'regulatory-extraction',
        target: 'Regulatory Extraction',
        focus: 'Data Intelligence',
        note: 'Developing zero-shot extraction protocols for international maritime and transport law updates.',
        full_description: 'Regulatory environments in maritime and international transport are increasingly volatile. This research focus involves the development of zero-shot RAG (Retrieval-Augmented Generation) pipelines designed specifically for high-density legal and regulatory documentation. The goal is to surface mission-critical signals from thousands of pages of updates with 99.9% extraction accuracy.',
        status: 'Active',
        hypothesis: 'Zero-shot extraction protocols can identify critical regulatory shifts faster than dedicated legal compliance teams.',
        tech_stack: ['PyTorch', 'Rust', 'Vector Databases', 'Custom LLM Embeddings']
    },
    {
        slug: 'low-bandwidth-sync',
        target: 'Low-Bandwidth Sync',
        focus: 'Networking',
        note: 'Engineering mesh-based state synchronization for coordination tools in high-interference environments.',
        full_description: 'Coordination fails when connectivity is lost. We are researching mesh-based state synchronization protocols that allow tactical teams to maintain a shared operational picture in environments with low or intermittent bandwidth. This involves custom CRDT (Conflict-free Replicated Data Types) implementations optimized for high-interference radio environments.',
        status: 'Active',
        hypothesis: 'Optimized CRDTs can maintain state consistency in 90% packet loss environments.',
        tech_stack: ['Go', 'CRDTs', 'p2p Networking', 'Protocol Buffers']
    },
    {
        slug: 'predictive-aridity-mapping',
        target: 'Predictive Aridty Mapping',
        focus: 'Environmental Intelligence',
        note: 'Using satellite CV to predict agricultural resource scarcity shifts before they impact market pricing.',
        full_description: 'Environmental volatility is the ultimate strategic bottleneck. We are developing computer vision models that analyze hyperspectral satellite imagery to detect early indicators of resource scarcity (aridty, soil exhaustion, irrigation failure). By mapping these shifts, we can predict supply chain disruptions months before they manifest in market signals.',
        status: 'Active',
        hypothesis: 'Hyperspectral CV signatures can predict crop failure 4-6 weeks before traditional infrared sensing.',
        tech_stack: ['Computer Vision', 'Satellite OSINT', 'TensorFlow', 'Geospatial Data Processing']
    },
    {
        slug: 'predictive-roof-maintenance',
        target: 'Predictive Roof Maintenance',
        focus: 'Asset Intelligence',
        note: 'Developing multimodal predictive models to forecast high-cost building maintenance needs and structural failures.',
        full_description: 'A structural investigation into predicting high-cost building maintenance needs using multimodal historical data. By constructing canonical data models across buildings, roof elements, and intervention history, we are training gradient-boosted trees and survival models to forecast time-to-next-job and cost bands. Phase two incorporates computer vision on inspection photos and 3D risk features to predict failures months before reactive callouts occur.',
        status: 'Active',
        hypothesis: 'Multimodal predictive models incorporating history, transcript-derived signals, and computer vision can forecast roof element failures months before reactive callouts, significantly reducing cost.',
        tech_stack: ['XGBoost', 'Survival Models', 'Computer Vision', 'LiDAR', 'Next.js']
    }
];
