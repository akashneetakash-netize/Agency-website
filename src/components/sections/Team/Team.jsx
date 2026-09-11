import { SectionHeader } from '../../common/SectionHeader/SectionHeader';
import { TeamCarousel } from './TeamCarousel';
import { teamMembers } from '../../../data/team';
import styles from './Team.module.css';

export function Team() {
  return (
    <section className={styles.team} id="team">
      <div className={styles.container}>
        <SectionHeader
          eyebrow="THE MINDS BEHIND ELEVIQ"
          title="World-Class AI Leaders &"
          titleHighlight="Neural Engineers"
          description="Our leadership team unites deep research expertise from Google AI, MIT, AWS, and EU Governance councils."
        />

        <TeamCarousel members={teamMembers} />
      </div>
    </section>
  );
}