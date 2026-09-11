import { SectionHeader } from '../../common/SectionHeader/SectionHeader';
import { ProcessStep } from './ProcessStep';
import styles from './Process.module.css';

export function Process() {
  const steps = [
    {
      stepNumber: '01',
      phase: 'PHASE 01 — ARCHITECTURE & DATA AUDIT',
      title: 'Cognitive Strategy & Data Auditing',
      description:
        'We evaluate your current enterprise data schemas, security constraints, and operational bottlenecks to define exact model requirements and ROI benchmarks.',
      deliverables: ['Data Pipeline Readiness Audit', 'Custom LLM Specs', 'SOC2 Security Plan'],
      icon: <img src="/icon-01.png" alt="Architecture & Data Audit" />,
    },
    {
      stepNumber: '02',
      phase: 'PHASE 02 — MODEL ENGINEERING & FINE-TUNING',
      title: 'Neural Fine-Tuning & Swarm Engineering',
      description:
        'Our research team trains domain-adapted neural networks, fine-tunes LLMs on your proprietary data, and constructs resilient RAG vector search pipelines.',
      deliverables: ['Domain-Adapted Model Checkpoints', 'Vector Index Sync', 'Human-In-The-Loop UI'],
      icon: <img src="/icon-02.png" alt="Architecture & Data Audit" />,
    },
    {
      stepNumber: '03',
      phase: 'PHASE 03 — INTEGRATION & STAGING TEST',
      title: 'Zero-Downtime Microservice Orchestration',
      description:
        'We integrate the AI engine into your existing ERP/CRM via high-throughput REST/gRPC API microservices with fail-safe fallback circuits.',
      deliverables: ['Sub-500ms API Endpoints', 'Automated Test Suite', 'Real-Time Telemetry Dashboard'],
      icon: <img src="/icon-03.png" alt="Architecture & Data Audit" />,
    },
    {
      stepNumber: '04',
      phase: 'PHASE 04 — DEPLOYMENT & SLM MONITORING',
      title: 'Autonomous Scaling & Continuous Optimization',
      description:
        'Post-deployment, our automated telemetry system tracks model precision drift, cost efficiency, and latency while executing automated model retraining loops.',
      deliverables: ['Automated Drift Detection', 'Monthly Tuning Reports', '24/7 Enterprise SLA Support'],
      icon: <img src="/icon-04.png" alt="Architecture & Data Audit" />,
    },
  ];

  return (
    <section className={styles.process} id="process">
      <div className={styles.container}>
        <SectionHeader
          eyebrow="EXECUTION FRAMEWORK"
          title="From Concept to"
          titleHighlight="Autonomous Scale"
          description="Our 4-phase engineering methodology ensures predictable timelines, military-grade security compliance, and measurable business impact."
        />

        {/* No timeline line anymore */}
        <div className={styles.stepsWrapper}>
          {steps.map((step, idx) => (
            <ProcessStep key={step.stepNumber} {...step} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;