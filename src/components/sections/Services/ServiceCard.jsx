import {
  Info,
  Cpu,
  Monitor,
  Zap,
  Lock,
  ArrowUpRight,
} from 'lucide-react';
import { useNavigation } from '../../../context/NavigationContext';
import styles from './ServiceCard.module.css';

const iconMap = {
  Info,
  Cpu,
  Monitor,
  Zap,
  Lock,
};

function VisualMock({ type }) {
  if (type === 'strategy') {
    return (
      <div className={styles.visualStrategy}>
        <svg viewBox="0 0 80 80" className={styles.pentagon}>
          <polygon
            points="40,8 72,30 60,68 20,68 8,30"
            fill="none"
            stroke="#2563EB"
            strokeWidth="1.8"
          />
          <circle cx="40" cy="8" r="3.5" fill="#2563EB" />
          <circle cx="72" cy="30" r="3.5" fill="#2563EB" />
          <circle cx="60" cy="68" r="3.5" fill="#2563EB" />
          <circle cx="20" cy="68" r="3.5" fill="#2563EB" />
          <circle cx="8" cy="30" r="3.5" fill="#2563EB" />
        </svg>
        <div className={styles.strategyLegend}>
          <span>• Cost: Optim</span>
          <span>• Uptime: 99.9%</span>
          <span>• Data Sec</span>
        </div>
      </div>
    );
  }

  if (type === 'iot') {
    return (
      <div className={styles.visualIot}>
        <div className={styles.iotGrid}>
          <div className={styles.iotCell}>
            <span className={styles.iotLabel}>NODE_01</span>
            <span className={styles.iotValue}>24.8°C</span>
          </div>
          <div className={styles.iotCell}>
            <span className={styles.iotLabel}>EDGE_ACC</span>
            <span className={styles.iotValue}>v2.4.1</span>
          </div>
          <div className={styles.iotCell}>
            <span className={styles.iotLabel}>SYS_CPU</span>
            <span className={styles.iotValue}>14.2%</span>
          </div>
          <div className={styles.iotCell}>
            <span className={styles.iotLabel}>NET_PING</span>
            <span className={styles.iotValue}>12ms</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'webapp') {
    return (
      <div className={styles.visualWebapp}>
        <div className={styles.terminal}>
          <div className={styles.terminalDots}>
            <span />
            <span />
            <span />
          </div>
          <div className={styles.terminalTitle}>dev_console.log</div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'automation') {
    return (
      <div className={styles.visualAutomation}>
        <div className={styles.flowNode}>POST /webhook</div>
        <div className={styles.flowArrow} />
        <div className={styles.flowNodeDark}>AI.Router</div>
      </div>
    );
  }

  if (type === 'agents') {
    return (
      <div className={styles.visualAgents}>
        <div className={styles.codeHeader}>
          <span className={styles.codeDots}>
            <i /><i /><i />
          </span>
          <span>agent_engine.py</span>
          <span className={styles.codeLang}>PYTHON</span>
        </div>
        <pre className={styles.codeBody}>
{`class CognitiveAgent (
  @tool
  async def execute_tas
  leads = await ctx.sea
  return [ctx.enrich(1)`}
        </pre>
        <div className={styles.codeStatus}>
          <span className={styles.exec}>EXEC Parsing structure...</span>
          <span className={styles.done}>DONE Schema verified</span>
        </div>
      </div>
    );
  }

  return null;
}

export function ServiceCard({ icon, title, description, benefits, visual }) {
  const IconComponent = iconMap[icon] || Info;
  const { navigateToSection } = useNavigation();

  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <IconComponent size={20} strokeWidth={2} />
        </div>

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <ul className={styles.benefitsList}>
          {benefits.map((b, i) => (
            <li key={i} className={styles.benefitItem}>
              <span className={styles.arrow}>→</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={styles.cta}
          onClick={() => navigateToSection('contact')}
        >
          Explore Service & Cases
          <ArrowUpRight size={16} />
        </button>
      </div>

      <div className={styles.visual}>
        <VisualMock type={visual} />
      </div>
    </article>
  );
}
