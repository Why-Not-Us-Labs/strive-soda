# Documentation Structure

This directory contains project documentation organized by type.

## `/meeting-notes/`

Contains chronological meeting records with clients and stakeholders.

### Folder Structure

Each meeting should be organized in a dated folder:

```
docs/meeting-notes/
├── YYYY-MM-DD-meeting-name/
│   ├── video.mp4              # Meeting recording
│   ├── transcript.md          # Full transcript of meeting
│   ├── summary.md             # Executive summary with action items
│   └── assets/                # Any screenshots, diagrams, or references
```

### Meeting Summary Format

Each `summary.md` should include:

1. **Meeting Metadata**
   - Date & Time
   - Attendees
   - Duration

2. **Key Discussion Points**
   - Main topics covered
   - Decisions made

3. **Action Items**
   - **Coding Work**: Technical implementation tasks
   - **General Tasks**: Business tasks (pricing, emails, follow-ups)

4. **Next Steps**
   - Timeline
   - Priorities
   - Next meeting date

### Usage

When adding a new meeting:

1. Create dated folder: `YYYY-MM-DD-brief-description/`
2. Add video recording (if available)
3. Add transcript.md (raw notes or transcription)
4. Create summary.md with structured takeaways
5. Notify Claude Code of new meeting files for context review

Claude Code will:
- Reformat MD files for proper structure
- Extract action items and create task list
- Separate coding work from general business tasks
- Track progress on meeting-related deliverables
